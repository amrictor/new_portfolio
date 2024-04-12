import React, { useEffect } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';

// 'rgba(28, 134, 209, 0.3)'
// 'rgba(28, 134, 209, 0.6)'
// 'rgba(28, 134, 209, 1.0)'


const useStyles = makeStyles({
  canvas: {
    background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 94%, rgba(28,134,209,1) 100%);',
    position: 'absolute',
    top: 0,
    zIndex: -1,
    height: '100vh',
    width: '100vw',
  }
})

function drawSin(ctx, w, h, color, wav, dY) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, h);
  ctx.lineTo(0, dY);
  ctx.quadraticCurveTo(w / 4, dY - wav, w / 2, dY);
  ctx.lineTo(w / 2, dY)
  ctx.quadraticCurveTo((w * 3) / 4, dY + wav, w, dY);
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function addWave(ctx0, color, rate = 0.60, wave = 45, flat = 360, speed = 7) {
  let canvas = document.createElement('canvas');
  canvas.width = document.body.offsetWidth;
  canvas.height = document.body.offsetHeight;
  let mW = canvas.height*1.2;
  if (mW < canvas.width) mW = canvas.width;
  let ctx = canvas.getContext('2d');
  drawSin(ctx, canvas.width, canvas.height, color, wave, canvas.height - canvas.height * rate);

  var rate1 = rate, wave1 = wave, flat1 = flat
  let x = 0;
  let flatDelta = canvas.width < canvas.height ? 2 : 1//range 120 - 500 ?
  let flatRange = 0.75*flat;
  let waveDelta = 0.25
  let waveRange = 0.25*wave;
  function animation() {
    if (rate !== rate1 || wave1 !== wave) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawSin(ctx, canvas.width, canvas.height, color, wave, canvas.height - canvas.height * rate);
    }

    
    if((flat > (flat1+flatRange) && flatDelta > 0) || (flat < (flat1-flatRange) && flatDelta < 0)) flatDelta *=-1
    flat += flatDelta

    if((wave > (wave1+waveRange) && waveDelta > 0) || (wave < (wave1-waveRange) && waveDelta < 0)) waveDelta *=-1
    wave += waveDelta
    ctx0.drawImage(canvas, x, 0, mW + flat , canvas.height)
    ctx0.drawImage(canvas, x - mW - flat, 0, mW + flat, canvas.height)
    x >= (mW - speed + flat) ? x = 0 : x += speed
  }

  return animation;
}

const calcWave = (ratio, base) => {
  if (ratio > 1) ratio = 1;
  return base*ratio
}


const calcFlat = (ratio, base) => {
  if (ratio > 1) ratio = 1;
  if (ratio < 0.75) ratio = 0.75;
  return base*ratio
}

const calcSpeed = (ratio, base) => {
  if (ratio > 1) ratio = 1;
  return base*ratio < 0.75 ? 0.75 : base*ratio
}

const calcHeightDiff = (ratio) => {
  if (ratio > 1) ratio = 1;
  return ratio * 0.25
}


const Waves = React.memo(() => {
  const classes = useStyles();
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')
    let ratio = canvas.width / canvas.height;
    let heightDiff = calcHeightDiff(ratio)
    
    let anim0 = addWave(ctx, 'rgb(186,218,241)', 0.65, calcWave(ratio, 70), calcFlat(ratio, 60), calcSpeed(ratio, 4));
    let anim2 = addWave(ctx, 'rgb(91,167,221)', 0.45, calcWave(ratio, 90), calcFlat(ratio, 170), calcSpeed(ratio, 2));
    let anim3 = addWave(ctx, 'rgb(28,134,209)', 0.2, calcWave(ratio, 60), calcFlat(ratio,120), calcSpeed(ratio, 3));

    window.addEventListener("resize", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      canvas.width = document.body.offsetWidth;
      canvas.height = document.body.offsetHeight;
      ratio = canvas.width / canvas.height;
      anim0 = addWave(ctx, 'rgb(186,218,241)', 0.65, calcWave(ratio, 70), calcFlat(ratio, 60), calcSpeed(ratio, 4));
      anim2 = addWave(ctx, 'rgb(91,167,221)', 0.45, calcWave(ratio, 90), calcFlat(ratio, 170), calcSpeed(ratio, 2));
      anim3 = addWave(ctx, 'rgb(28,134,209)', 0.2, calcWave(ratio, 60), calcFlat(ratio,120), calcSpeed(ratio, 3));
    })

    function animations() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      anim0();
      anim2();
      anim3();
      requestAnimationFrame(animations);
    }
    animations();
  }, []);
 
  return (
    <div className={classes.canvas}>
      <canvas id='canvas' height={document.body.offsetHeight} width={document.body.offsetWidth}/>    
    </div>
    
  );
})

export default Waves;
