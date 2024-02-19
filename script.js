let canvas;
let ctx;
let datalist;

window.onload = function() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    datalist = document.getElementById("myPals");
    input = document.getElementById("myInput");
    input.value = "";
    
    //input.addEventListener('change', inputChanged);
    input.addEventListener('input', (evt) => {
        inputChanged();
    });
    
    canvas.onmousedown = canvasClick;
    canvas.onmouseup = stopDragging;
    canvas.onmouseout = stopDragging;
    canvas.onmousemove = dragCircle;
    
    populateCirclePositions();
    populateConnections();
    populateCircles();
    populateDatalist();
    draw();
};

let circles = [
new Circle("Lamball", 50, 50, 50, "red", "black"),
new Circle("Cattiva", 50, 50, 50, "red", "black"),
new Circle("Chikipi", 50, 50, 50, "red", "black"),
new Circle("Lifmunk", 50, 50, 50, "red", "black"),
new Circle("Foxparks", 50, 50, 50, "red", "black"),
new Circle("Fuack", 50, 50, 50, "red", "black"),
new Circle("Sparkit", 50, 50, 50, "red", "black"),
new Circle("Tanzee", 50, 50, 50, "red", "black"),
new Circle("Rooby", 50, 50, 50, "red", "black"),
new Circle("Pengullet", 50, 50, 50, "red", "black"),
new Circle("Penking", 50, 50, 50, "red", "black"),
new Circle("Jolthog", 50, 50, 50, "red", "black"),
new Circle("Jolthog Cryst", 50, 50, 50, "red", "black"),
new Circle("Gumoss", 50, 50, 50, "red", "black"),
new Circle("Vixy", 50, 50, 50, "red", "black"),
new Circle("Hoocrates", 50, 50, 50, "red", "black"),
new Circle("Teafant", 50, 50, 50, "red", "black"),
new Circle("Depresso", 50, 50, 50, "red", "black"),
new Circle("Cremis", 50, 50, 50, "red", "black"),
new Circle("Daedream", 50, 50, 50, "red", "black"),
new Circle("Rushoar", 50, 50, 50, "red", "black"),
new Circle("Nox", 50, 50, 50, "red", "black"),
new Circle("Fuddler", 50, 50, 50, "red", "black"),
new Circle("Killamari", 50, 50, 50, "red", "black"),
new Circle("Mau", 50, 50, 50, "red", "black"),
new Circle("Mau Cryst", 50, 50, 50, "red", "black"),
new Circle("Celaray", 50, 50, 50, "red", "black"),
new Circle("Direhowl", 50, 50, 50, "red", "black"),
new Circle("Tocotoco", 50, 50, 50, "red", "black"),
new Circle("Flopie", 50, 50, 50, "red", "black"),
new Circle("Mozzarina", 50, 50, 50, "red", "black"),
new Circle("Bristla", 50, 50, 50, "red", "black"),
new Circle("Gobfin", 50, 50, 50, "red", "black"),
new Circle("Gobfin Ignis", 50, 50, 50, "red", "black"),
new Circle("Hangyu", 50, 50, 50, "red", "black"),
new Circle("Hangyu Cryst", 50, 50, 50, "red", "black"),
new Circle("Mossanda", 50, 50, 50, "red", "black"),
new Circle("Mossanda Lux", 50, 50, 50, "red", "black"),
new Circle("Woolipop", 50, 50, 50, "red", "black"),
new Circle("Caprity", 50, 50, 50, "red", "black"),
new Circle("Melpaca", 50, 50, 50, "red", "black"),
new Circle("Eikthyrdeer", 50, 50, 50, "red", "black"),
new Circle("Eikthyrdeer Terra", 50, 50, 50, "red", "black"),
new Circle("Nitewing", 50, 50, 50, "red", "black"),
new Circle("Ribunny", 50, 50, 50, "red", "black"),
new Circle("Incineram", 50, 50, 50, "red", "black"),
new Circle("Incineram Noct", 50, 50, 50, "red", "black"),
new Circle("Cinnamoth", 50, 50, 50, "red", "black"),
new Circle("Arsox", 50, 50, 50, "red", "black"),
new Circle("Dumud", 50, 50, 50, "red", "black"),
new Circle("Cawgnito", 50, 50, 50, "red", "black"),
new Circle("Leezpunk", 50, 50, 50, "red", "black"),
new Circle("Leezpunk Ignis", 50, 50, 50, "red", "black"),
new Circle("Loupmoon", 50, 50, 50, "red", "black"),
new Circle("Galeclaw", 50, 50, 50, "red", "black"),
new Circle("Robinquill", 50, 50, 50, "red", "black"),
new Circle("Robinquill Terra", 50, 50, 50, "red", "black"),
new Circle("Gorirat", 50, 50, 50, "red", "black"),
new Circle("Beegarde", 50, 50, 50, "red", "black"),
new Circle("Elizabee", 50, 50, 50, "red", "black"),
new Circle("Grintale", 50, 50, 50, "red", "black"),
new Circle("Swee", 50, 50, 50, "red", "black"),
new Circle("Sweepa", 50, 50, 50, "red", "black"),
new Circle("Chillet", 50, 50, 50, "red", "black"),
new Circle("Univolt", 50, 50, 50, "red", "black"),
new Circle("Foxcicle", 50, 50, 50, "red", "black"),
new Circle("Pyrin", 50, 50, 50, "red", "black"),
new Circle("Pyrin Noct", 50, 50, 50, "red", "black"),
new Circle("Reindrix", 50, 50, 50, "red", "black"),
new Circle("Rayhound", 50, 50, 50, "red", "black"),
new Circle("Kitsun", 50, 50, 50, "red", "black"),
new Circle("Dazzi", 50, 50, 50, "red", "black"),
new Circle("Lunaris", 50, 50, 50, "red", "black"),
new Circle("Dinossom", 50, 50, 50, "red", "black"),
new Circle("Dinossom Lux", 50, 50, 50, "red", "black"),
new Circle("Surfent", 50, 50, 50, "red", "black"),
new Circle("Surfent Terra", 50, 50, 50, "red", "black"),
new Circle("Maraith", 50, 50, 50, "red", "black"),
new Circle("Digtoise", 50, 50, 50, "red", "black"),
new Circle("Tombat", 50, 50, 50, "red", "black"),
new Circle("Lovander", 50, 50, 50, "red", "black"),
new Circle("Flambelle", 50, 50, 50, "red", "black"),
new Circle("Vanwyrm", 50, 50, 50, "red", "black"),
new Circle("Vanwyrm Cryst", 50, 50, 50, "red", "black"),
new Circle("Bushi", 50, 50, 50, "red", "black"),
new Circle("Beakon", 50, 50, 50, "red", "black"),
new Circle("Ragnahawk", 50, 50, 50, "red", "black"),
new Circle("Katress", 50, 50, 50, "red", "black"),
new Circle("Wixen", 50, 50, 50, "red", "black"),
new Circle("Verdash", 50, 50, 50, "red", "black"),
new Circle("Vaelet", 50, 50, 50, "red", "black"),
new Circle("Sibelyx", 50, 50, 50, "red", "black"),
new Circle("Elphidran", 50, 50, 50, "red", "black"),
new Circle("Elphidran Aqua", 50, 50, 50, "red", "black"),
new Circle("Kelpsea", 50, 50, 50, "red", "black"),
new Circle("Kelpsea Ignis", 50, 50, 50, "red", "black"),
new Circle("Azurobe", 50, 50, 50, "red", "black"),
new Circle("Cryolinx", 50, 50, 50, "red", "black"),
new Circle("Blazehowl", 50, 50, 50, "red", "black"),
new Circle("Blazehowl Noct", 50, 50, 50, "red", "black"),
new Circle("Relaxaurus", 50, 50, 50, "red", "black"),
new Circle("Relaxaurus Lux", 50, 50, 50, "red", "black"),
new Circle("Broncherry", 50, 50, 50, "red", "black"),
new Circle("Broncherry Aqua", 50, 50, 50, "red", "black"),
new Circle("Petallia", 50, 50, 50, "red", "black"),
new Circle("Reptyro", 50, 50, 50, "red", "black"),
new Circle("Reptyro Cryst", 50, 50, 50, "red", "black"),
new Circle("Kingpaca", 50, 50, 50, "red", "black"),
new Circle("Kingpaca Cryst", 50, 50, 50, "red", "black"),
new Circle("Mammorest", 50, 50, 50, "red", "black"),
new Circle("Mammorest Cryst", 50, 50, 50, "red", "black"),
new Circle("Wumpo", 50, 50, 50, "red", "black"),
new Circle("Wumpo Botan", 50, 50, 50, "red", "black"),
new Circle("Warsect", 50, 50, 50, "red", "black"),
new Circle("Fenglope", 50, 50, 50, "red", "black"),
new Circle("Felbat", 50, 50, 50, "red", "black"),
new Circle("Quivern", 50, 50, 50, "red", "black"),
new Circle("Blazamut", 50, 50, 50, "red", "black"),
new Circle("Helzephyr", 50, 50, 50, "red", "black"),
new Circle("Astegon", 50, 50, 50, "red", "black"),
new Circle("Menasting", 50, 50, 50, "red", "black"),
new Circle("Anubis", 50, 50, 50, "red", "black"),
new Circle("Jormuntide", 50, 50, 50, "red", "black"),
new Circle("Jormuntide Ignis", 50, 50, 50, "red", "black"),
new Circle("Suzaku", 50, 50, 50, "red", "black"),
new Circle("Suzaku Aqua", 50, 50, 50, "red", "black"),
new Circle("Grizzbolt", 50, 50, 50, "red", "black"),
new Circle("Lyleen", 50, 50, 50, "red", "black"),
new Circle("Lyleen Noct", 50, 50, 50, "red", "black"),
new Circle("Faleris", 50, 50, 50, "red", "black"),
new Circle("Orserk", 50, 50, 50, "red", "black"),
new Circle("Shadowbeak", 50, 50, 50, "red", "black"),
new Circle("Paladius", 50, 50, 50, "red", "black"),
new Circle("Necromus", 50, 50, 50, "red", "black"),
new Circle("Frostallion", 50, 50, 50, "red", "black"),
new Circle("Frostallion Noct", 50, 50, 50, "red", "black"),
new Circle("Jetragon", 50, 50, 50, "red", "black"),
]

let fixed_circles = [];

let circle_positions = [[200, 200]];

let connectors = [];

let colors = ["LightSeaGreen", "RoyalBlue", "Salmon"];

let circle_radius = 30;
let max_recursion = 10;

let previousSelectedCircle = circles[0];
let lastUpdatedCircle = circles[0];

function inputChanged() {
    console.log("okay");
    console.log(input.value);
    let obj = getObject(input.value);
    if ( obj != null) {
        previousSelectedCircle = obj;
        draw();
    }
}

//main draw method
function draw() {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawConnectors();
    drawCircles();
}

//draw circles
function drawCircles() {
    for (let i = circles.length - 1; i >= 0; i--) {
        circles[i].draw();
    }
}

function drawConnectors () {
    if (lastUpdatedCircle != previousSelectedCircle) {
        lastUpdatedCircle = previousSelectedCircle;
        clearColors();

        let seen_values = [ ];
        let recursion_count = 0;
        let randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        
        recursiveGetRelations(previousSelectedCircle.label, new Array(), new Array(), 0);
    }
}

function clearColors() {
    for(let i=0;i<circles.length;i++){
        circles[i].fill = "LightGrey";
        circles[i].alpha = 0.25;
        circles[i].recursion = 0;
    }
}

function recursiveGetRelations(parent_name, seen_parent, seen_children, count) {
    let parent = getObject(parent_name);
    let old_count = count;
    if (count == 0) {
        parent.fill = "Purple";
        parent.alpha = 1;
        seen_children.push(parent_name);
    }
    if(!seen_parent.includes(parent_name)) {
        seen_parent.push(parent_name);
        count++
        if (count <= max_recursion) {
            for(let i=0;i<connectors.length;i++){
                let connector=connectors[i];
                
                if(connector[0] != parent_name) {
                    continue;
                }
                child_name = connector[1];
                child = getObject(child_name);
                
                if(!seen_children.includes(child_name)) {
                    seen_children.push(parent_name);
                    if (child.recursion > count || child.recursion == 0) {
                        child.recursion = count;
                    }
                    if (child.recursion <= colors.length) {
                        child.fill = colors[child.recursion - 1];
                        child.alpha = 1;
                    }
                }
                recursiveGetRelations(child_name, seen_parent, seen_children, count);
                count = old_count + 1;
            }
        }
    }
}

function drawLinks(parent, child) {
    dist = distance(parent.x,parent.y,child.x,child.y);
    scaled = (1/dist)*(child.r + 5);
    
    pX = (child.x-parent.x)*scaled+parent.x;
    pY = (child.y-parent.y)*scaled+parent.y;
    
    cX = (parent.x-child.x)*scaled+child.x;
    cY = (parent.y-child.y)*scaled+child.y;
    
    ctx.lineCap = 'round'
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.5;
    
    canvas_line(ctx, pX, pY, cX, cY);
    
    ctx.globalAlpha = 1;
}

function getObject(label) {
    let object = null;
    for(let j=0;j<fixed_circles.length;j++) {
        if (label == fixed_circles[j].label) {
            object = fixed_circles[j];
        }
        
        if (object != null) {
            break;
        }
    }
    return object;
}

function populateCircles() {
    fixed_circles = new Array;
    for(let i=0;i<circles.length;i++) {
        fixed_circles.push(circles[i]);
        circles[i].r = circle_radius;
        
        circles[i].x = circle_positions[i][0];
        circles[i].y = circle_positions[i][1];
        circles[i].fill = "Black";
    }
}

function populateCirclePositions() {
    for(i=0;i<circles.length;i++) {
        let offset = circle_radius;
        let randoX = offset + Math.random() * (window.innerWidth - offset*2);
        let randoY = offset + Math.random() * (window.innerHeight - offset*2);
        let found_point = true;
        
        for(j=0;j<circle_positions.length;j++) {
            let foundX = circle_positions[j][0];
            let foundY = circle_positions[j][1];
            
            if(distance(randoX, randoY, foundX, foundY) < circle_radius*2) {
                found_point = false;
                break;
            }
        }
        if (!found_point) {
            i--;
        }
        else {
            circle_positions.push([randoX, randoY]);
        }
    }
}



function populateConnections() {
    for(let i=0;i<circles.length;i++) {
        let parent_name = circles[i].label.toUpperCase().replace(' ', '_');
        children = eval(parent_name);
        for(let j=0;j<children.length;j++) {
            connectors.push([circles[i].label, children[j]]);
            //console.log("Added: " + children[j]);
        }
    }
}

function populateDatalist() {
    for (i=0;i<circles.length;i++) {
        option = document.createElement("option");
        option.value = circles[i].label;
        datalist.appendChild(option);
    }
}

function canvas_line(context, fromx, fromy, tox, toy) {
    ctx.strokeStyle = "purple";
    
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.stroke();
}

function canvas_arrow(context, fromx, fromy, tox, toy) {
    let headlen = 10; // length of head in pixels
    let dx = tox - fromx;
    let dy = toy - fromy;
    let angle = Math.atan2(dy, dx);
    ctx.beginPath();
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
}

function canvas_double_arrow(context, fromx, fromy, tox, toy) {
    let headlen = 10;
    let ux = tox - fromx;
    let uy = toy - fromy;
    let vx = fromx - tox;
    let vy = fromy - toy;
    let angle = Math.atan2(uy, ux);
    let angle2 = Math.atan2(vy, vx);
    ctx.beginPath();
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    context.moveTo(fromx, fromy);
    context.lineTo(fromx - headlen * Math.cos(angle2 - Math.PI / 6), fromy - headlen * Math.sin(angle2 - Math.PI / 6));
    context.moveTo(fromx, fromy);
    context.lineTo(fromx - headlen * Math.cos(angle2 + Math.PI / 6), fromy - headlen * Math.sin(angle2 + Math.PI / 6));
    ctx.stroke();
}

function distance(ux, uy, vx, vy) {

    //simple equation for distance of two points in the cartesian plane
    let dif_x = ux - vx;
    let dif_y = uy - vy;

    let squared_difs = dif_x * dif_x + dif_y * dif_y;

    let distance = Math.sqrt(squared_difs);
    return distance;
}

//circle Object
function Circle(label, x, y, r, fill, stroke) {
    this.startingAngle = 0;
    this.endingAngle = 2 * Math.PI;
    this.isSelected = false;
    this.label = label;
    this.x = x;
    this.y = y;
    this.r = r;
    this.alpha = 1;
    this.recursion = 0;

    this.fill = fill;
    this.stroke = stroke;

    this.draw = function () {
        
        
        var iconImg = new Image();
        iconImg.src = "./images/" + this.label.replace(' ', '_') + ".png";
        if (iconImg.complete) {
            // save state as restoring is the only way to remove a clip-mask
            ctx.save();

            // define clip-mask using path operations
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, this.startingAngle, this.endingAngle);
            ctx.fillStyle = this.fill;
            ctx.lineCap = 'round'
            ctx.lineWidth = 1;
            
            ctx.globalAlpha = 0.5;
            ctx.fill();
            ctx.globalAlpha = this.alpha;
            
            ctx.strokeStyle = this.stroke;
            ctx.stroke();
            
            ctx.clip();

            // draw in top image
            ctx.drawImage(iconImg, this.x-this.r, this.y-this.r, this.r*2, this.r*2);

            // remove clip mask
            ctx.restore();
            
            if (this.recursion > colors.length) {
                ctx.globalAlpha = 0.25;
                ctx.font = circle_radius.toString() + "px Arial ";
                ctx.fillStyle = "black";
                ctx.textAlign = "center";
                ctx.fillText(this.recursion, this.x, this.y+circle_radius/2.5);
            }
            
            ctx.globalAlpha = 1;
        }
    }
}

function canvasClick(e) {
  let clickX = e.pageX - canvas.offsetLeft;
  let clickY = e.pageY - canvas.offsetTop;

  for(let i=circles.length-1; i>=0; i--) {
    let circle = circles[i];

    let distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2))
    if (distanceFromCenter <= circle.r) {
      if (previousSelectedCircle != null) previousSelectedCircle.isSelected = false;
      previousSelectedCircle = circle;

      circle.isSelected = true;

      isDragging = true;

      draw();
      return;
    }
  }
}

let isDragging = false;

function stopDragging() {
  isDragging = false;
}

function dragCircle(e) {
  if (isDragging == true) {
    if (previousSelectedCircle != null) {
      let x = e.pageX - canvas.offsetLeft;
      let y = e.pageY - canvas.offsetTop;

      previousSelectedCircle.x = x;
      previousSelectedCircle.y = y;

      draw();
    }
  }
}