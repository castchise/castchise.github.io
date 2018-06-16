var canvas = document.getElementById('bonfire');
var ctx = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var particles = [];
var colors = ['#f29d4a', '#ce6d0e', '#b97839', '#fea147', '#ff7e00'];

function initParticles() {
  for (var i = 0; i < 200; i++) {
    setTimeout(createParticle, 20*i, i);
  }
}

function createParticle(i) {
  // initial position in middle of canvas
  var x = width*0.5;
  var y = height*0.5;
  // randomize the vx and vy a little - but we still want them flying 'up' and 'out'
  var vx = -2+Math.random()*4;
  var vy = Math.random()*-3;
  // randomize size and opacity a little & pick a color from our color palette
  var size = 5+Math.random()*5;
  var color = colors[i%colors.length];
  var opacity =  0.5 + Math.random()*0.5;
  var p = new Particle(x, y, vx, vy, size, color, opacity);
  particles.push(p);
}

function Particle(x, y, vx, vy, size, color, opacity) {
  
  this.update = function() {
    x += vx;
    y += vy;
  }
  
  this.draw = function() {
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
  } 
}

function render() {
  ctx.clearRect(0, 0, width, height);
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  requestAnimationFrame(render);
}


// resize
window.addEventListener('resize', resize);
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}


// init
initParticles();
render();