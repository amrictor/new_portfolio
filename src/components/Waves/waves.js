import React, { useEffect } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  canvas: {
    position: 'absolute',
    top: 0,
    zIndex: -1,
    backgroundColor: 'white'
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
  let mW = canvas.width;
  let ctx = canvas.getContext('2d');
  drawSin(ctx, canvas.width, canvas.height, color, wave, canvas.height - canvas.height * rate);

  var rate1 = rate, wave1 = wave
  let x = 0;
  function animation() {
    if (rate !== rate1 || wave1 !== wave) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      rate1 = rate
      wave1 = wave
      drawSin(ctx, canvas.width, canvas.height, color, wave, canvas.height - canvas.height * rate);
    }
    ctx0.drawImage(canvas, x, 0, mW + flat, canvas.height)
    ctx0.drawImage(canvas, x - mW - flat, 0, mW + flat, canvas.height)
    x >= (mW - speed + flat) ? x = 0 : x += speed
  }
  window.addEventListener("resize", () => {
    canvas.width = document.body.offsetWidth;
    canvas.height = document.body.offsetHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSin(ctx, canvas.width, canvas.height, color, wave, canvas.height - canvas.height * rate);
  })
  return animation;
}

const Waves = React.memo(() => {
  const classes = useStyles();
  useEffect(() => {
    var canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')
    
    let anim0 = addWave(ctx, 'rgba(28, 134, 209, 0.3)', 0.7, 120, 60, 5);
    let anim2 = addWave(ctx, 'rgba(28, 134, 209, 0.6)', .5, 150, 180, 2);
    let anim3 = addWave(ctx, 'rgba(28, 134, 209, 1)', .2, 100, 120, 3);

    window.addEventListener("resize", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      canvas.width = document.body.offsetWidth;
      canvas.height = document.body.offsetHeight;
      anim0 = addWave(ctx, 'rgba(28, 134, 209, 0.3)', 0.7, 120, 60, 5);
      anim2 = addWave(ctx, 'rgba(28, 134, 209, 0.6)', .5, 150, 180, 3);
      anim3 = addWave(ctx, 'rgba(28, 134, 209, 1)', .2, 250, 120, 5);
    })

    function animations() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      anim0();
      anim2();
      anim3();
      requestAnimationFrame(animations);
    }
    animations();
  });
 
  return (
    <canvas id='canvas' className={classes.canvas} height={document.body.offsetHeight} width={document.body.offsetWidth}/>    
  );
})

export default Waves;
