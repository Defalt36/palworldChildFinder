let canvas;
let ctx;
let datalist;

window.onload = function() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    datalist = document.getElementById("myPals");
    
    parentInput = document.getElementById("parentInput");
    parentInput.value = "";
    
    parentInput.addEventListener('input', (evt) => {
        parentInputChanged();
    });
    
    childInput = document.getElementById("childInput");
    childInput.value = "";
    
    childInput.addEventListener('input', (evt) => {
        childInputChanged();
    });
    
    canvas.onmousedown = canvasClick;
    canvas.onmouseup = stopDragging;
    canvas.onmouseout = stopDragging;
    canvas.onmousemove = dragCircle;
    
    firstSelectedCircle = circles[0];
    firstSelectedCircle.isSelected = true;
    
    secondSelectedCircle = circles[1];
    secondSelectedCircle.isSelected = true;
    
    firstDraw();
};

let circles = [
new Circle("Lamball", null, 50, 50, 50, "red", "black"),
new Circle("Cattiva", null, 50, 50, 50, "red", "black"),
new Circle("Chikipi", null, 50, 50, 50, "red", "black"),
new Circle("Lifmunk", null, 50, 50, 50, "red", "black"),
new Circle("Foxparks", null, 50, 50, 50, "red", "black"),
new Circle("Fuack", null, 50, 50, 50, "red", "black"),
new Circle("Sparkit", null, 50, 50, 50, "red", "black"),
new Circle("Tanzee", null, 50, 50, 50, "red", "black"),
new Circle("Rooby", null, 50, 50, 50, "red", "black"),
new Circle("Pengullet", null, 50, 50, 50, "red", "black"),
new Circle("Penking", null, 50, 50, 50, "red", "black"),
new Circle("Jolthog", null, 50, 50, 50, "red", "black"),
new Circle("Jolthog Cryst", null, 50, 50, 50, "red", "black"),
new Circle("Gumoss", null, 50, 50, 50, "red", "black"),
new Circle("Vixy", null, 50, 50, 50, "red", "black"),
new Circle("Hoocrates", null, 50, 50, 50, "red", "black"),
new Circle("Teafant", null, 50, 50, 50, "red", "black"),
new Circle("Depresso", null, 50, 50, 50, "red", "black"),
new Circle("Cremis", null, 50, 50, 50, "red", "black"),
new Circle("Daedream", null, 50, 50, 50, "red", "black"),
new Circle("Rushoar", null, 50, 50, 50, "red", "black"),
new Circle("Nox", null, 50, 50, 50, "red", "black"),
new Circle("Fuddler", null, 50, 50, 50, "red", "black"),
new Circle("Killamari", null, 50, 50, 50, "red", "black"),
new Circle("Mau", null, 50, 50, 50, "red", "black"),
new Circle("Mau Cryst", null, 50, 50, 50, "red", "black"),
new Circle("Celaray", null, 50, 50, 50, "red", "black"),
new Circle("Direhowl", null, 50, 50, 50, "red", "black"),
new Circle("Tocotoco", null, 50, 50, 50, "red", "black"),
new Circle("Flopie", null, 50, 50, 50, "red", "black"),
new Circle("Mozzarina", null, 50, 50, 50, "red", "black"),
new Circle("Bristla", null, 50, 50, 50, "red", "black"),
new Circle("Gobfin", null, 50, 50, 50, "red", "black"),
new Circle("Gobfin Ignis", null, 50, 50, 50, "red", "black"),
new Circle("Hangyu", null, 50, 50, 50, "red", "black"),
new Circle("Hangyu Cryst", null, 50, 50, 50, "red", "black"),
new Circle("Mossanda", null, 50, 50, 50, "red", "black"),
new Circle("Mossanda Lux", null, 50, 50, 50, "red", "black"),
new Circle("Woolipop", null, 50, 50, 50, "red", "black"),
new Circle("Caprity", null, 50, 50, 50, "red", "black"),
new Circle("Melpaca", null, 50, 50, 50, "red", "black"),
new Circle("Eikthyrdeer", null, 50, 50, 50, "red", "black"),
new Circle("Eikthyrdeer Terra", null, 50, 50, 50, "red", "black"),
new Circle("Nitewing", null, 50, 50, 50, "red", "black"),
new Circle("Ribbuny", null, 50, 50, 50, "red", "black"),
new Circle("Incineram", null, 50, 50, 50, "red", "black"),
new Circle("Incineram Noct", null, 50, 50, 50, "red", "black"),
new Circle("Cinnamoth", null, 50, 50, 50, "red", "black"),
new Circle("Arsox", null, 50, 50, 50, "red", "black"),
new Circle("Dumud", null, 50, 50, 50, "red", "black"),
new Circle("Cawgnito", null, 50, 50, 50, "red", "black"),
new Circle("Leezpunk", null, 50, 50, 50, "red", "black"),
new Circle("Leezpunk Ignis", null, 50, 50, 50, "red", "black"),
new Circle("Loupmoon", null, 50, 50, 50, "red", "black"),
new Circle("Galeclaw", null, 50, 50, 50, "red", "black"),
new Circle("Robinquill", null, 50, 50, 50, "red", "black"),
new Circle("Robinquill Terra", null, 50, 50, 50, "red", "black"),
new Circle("Gorirat", null, 50, 50, 50, "red", "black"),
new Circle("Beegarde", null, 50, 50, 50, "red", "black"),
new Circle("Elizabee", null, 50, 50, 50, "red", "black"),
new Circle("Grintale", null, 50, 50, 50, "red", "black"),
new Circle("Swee", null, 50, 50, 50, "red", "black"),
new Circle("Sweepa", null, 50, 50, 50, "red", "black"),
new Circle("Chillet", null, 50, 50, 50, "red", "black"),
new Circle("Univolt", null, 50, 50, 50, "red", "black"),
new Circle("Foxcicle", null, 50, 50, 50, "red", "black"),
new Circle("Pyrin", null, 50, 50, 50, "red", "black"),
new Circle("Pyrin Noct", null, 50, 50, 50, "red", "black"),
new Circle("Reindrix", null, 50, 50, 50, "red", "black"),
new Circle("Rayhound", null, 50, 50, 50, "red", "black"),
new Circle("Kitsun", null, 50, 50, 50, "red", "black"),
new Circle("Dazzi", null, 50, 50, 50, "red", "black"),
new Circle("Lunaris", null, 50, 50, 50, "red", "black"),
new Circle("Dinossom", null, 50, 50, 50, "red", "black"),
new Circle("Dinossom Lux", null, 50, 50, 50, "red", "black"),
new Circle("Surfent", null, 50, 50, 50, "red", "black"),
new Circle("Surfent Terra", null, 50, 50, 50, "red", "black"),
new Circle("Maraith", null, 50, 50, 50, "red", "black"),
new Circle("Digtoise", null, 50, 50, 50, "red", "black"),
new Circle("Tombat", null, 50, 50, 50, "red", "black"),
new Circle("Lovander", null, 50, 50, 50, "red", "black"),
new Circle("Flambelle", null, 50, 50, 50, "red", "black"),
new Circle("Vanwyrm", null, 50, 50, 50, "red", "black"),
new Circle("Vanwyrm Cryst", null, 50, 50, 50, "red", "black"),
new Circle("Bushi", null, 50, 50, 50, "red", "black"),
new Circle("Beakon", null, 50, 50, 50, "red", "black"),
new Circle("Ragnahawk", null, 50, 50, 50, "red", "black"),
new Circle("Katress", null, 50, 50, 50, "red", "black"),
new Circle("Wixen", null, 50, 50, 50, "red", "black"),
new Circle("Verdash", null, 50, 50, 50, "red", "black"),
new Circle("Vaelet", null, 50, 50, 50, "red", "black"),
new Circle("Sibelyx", null, 50, 50, 50, "red", "black"),
new Circle("Elphidran", null, 50, 50, 50, "red", "black"),
new Circle("Elphidran Aqua", null, 50, 50, 50, "red", "black"),
new Circle("Kelpsea", null, 50, 50, 50, "red", "black"),
new Circle("Kelpsea Ignis", null, 50, 50, 50, "red", "black"),
new Circle("Azurobe", null, 50, 50, 50, "red", "black"),
new Circle("Cryolinx", null, 50, 50, 50, "red", "black"),
new Circle("Blazehowl", null, 50, 50, 50, "red", "black"),
new Circle("Blazehowl Noct", null, 50, 50, 50, "red", "black"),
new Circle("Relaxaurus", null, 50, 50, 50, "red", "black"),
new Circle("Relaxaurus Lux", null, 50, 50, 50, "red", "black"),
new Circle("Broncherry", null, 50, 50, 50, "red", "black"),
new Circle("Broncherry Aqua", null, 50, 50, 50, "red", "black"),
new Circle("Petallia", null, 50, 50, 50, "red", "black"),
new Circle("Reptyro", null, 50, 50, 50, "red", "black"),
new Circle("Reptyro Cryst", null, 50, 50, 50, "red", "black"),
new Circle("Kingpaca", null, 50, 50, 50, "red", "black"),
new Circle("Kingpaca Cryst", null, 50, 50, 50, "red", "black"),
new Circle("Mammorest", null, 50, 50, 50, "red", "black"),
new Circle("Mammorest Cryst", null, 50, 50, 50, "red", "black"),
new Circle("Wumpo", null, 50, 50, 50, "red", "black"),
new Circle("Wumpo Botan", null, 50, 50, 50, "red", "black"),
new Circle("Warsect", null, 50, 50, 50, "red", "black"),
new Circle("Fenglope", null, 50, 50, 50, "red", "black"),
new Circle("Felbat", null, 50, 50, 50, "red", "black"),
new Circle("Quivern", null, 50, 50, 50, "red", "black"),
new Circle("Blazamut", null, 50, 50, 50, "red", "black"),
new Circle("Helzephyr", null, 50, 50, 50, "red", "black"),
new Circle("Astegon", null, 50, 50, 50, "red", "black"),
new Circle("Menasting", null, 50, 50, 50, "red", "black"),
new Circle("Anubis", null, 50, 50, 50, "red", "black"),
new Circle("Jormuntide", null, 50, 50, 50, "red", "black"),
new Circle("Jormuntide Ignis", null, 50, 50, 50, "red", "black"),
new Circle("Suzaku", null, 50, 50, 50, "red", "black"),
new Circle("Suzaku Aqua", null, 50, 50, 50, "red", "black"),
new Circle("Grizzbolt", null, 50, 50, 50, "red", "black"),
new Circle("Lyleen", null, 50, 50, 50, "red", "black"),
new Circle("Lyleen Noct", null, 50, 50, 50, "red", "black"),
new Circle("Faleris", null, 50, 50, 50, "red", "black"),
new Circle("Orserk", null, 50, 50, 50, "red", "black"),
new Circle("Shadowbeak", null, 50, 50, 50, "red", "black"),
new Circle("Paladius", null, 50, 50, 50, "red", "black"),
new Circle("Necromus", null, 50, 50, 50, "red", "black"),
new Circle("Frostallion", null, 50, 50, 50, "red", "black"),
new Circle("Frostallion Noct", null, 50, 50, 50, "red", "black"),
new Circle("Jetragon", null, 50, 50, 50, "red", "black"),
]

let fixed_circles = [];

let circle_positions = [[200, 200]];

let connectors = new Array;
let links = new Array;

let colors = ["LightSeaGreen", "RoyalBlue", "Salmon"];

let parentInput;
let childInput;

let targetChild;

let targetChildChanged = false;
var lastSeenChildren = new Array;

let circle_radius = 30;
let max_recursion = 10;

let firstSelectedCircle;
let secondSelectedCircle;
let lastUpdatedCircle;

function parentInputChanged() {
    let obj = getObject(parentInput.value);
    if ( obj != null) {
        firstSelectedCircle = obj;
        draw();
    }
}

function childInputChanged() {
    let obj = getObject(childInput.value);
    if ( obj != null) {
        targetChild = obj.label;
        targetChildChanged = true;
        draw();
    }
    else {
        targetChild = null;
        if (targetChildChanged) {
            targetChildChanged = false;
            draw();
        }
    }
}

//main draw method
function draw(drawOnly = false) {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (!drawOnly) {
        gatherRelations();
    }
    
    drawLinks();
    drawCircles();
}

function firstDraw() {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    populateCirclePositions();
    populateConnections();
    populateCircles();
    populateDatalist();
    gatherRelations();
}

//draw circles
function drawCircles() {
    for(let i = circles.length - 1; i >= 0; i--) {
        if(circles[i] != firstSelectedCircle) {
            circles[i].draw();
        }
    }
    // always draw selected circle on top
    firstSelectedCircle.draw();
}

function gatherRelations () {
    if (lastUpdatedCircle != firstSelectedCircle) {
        lastUpdatedCircle = firstSelectedCircle;
        clearColors();

        let randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        
        recursiveGetRelations(firstSelectedCircle.label, new Array(), new Array(), 0, new Array());
    }
}

function drawLinks() {
    if (links.length != 0) {
        for(i=0;i<links.length;i++) {
            drawConnectLine(links[i][0], links[i][1]);
        }
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
    //console.log(parent_name);
    let parent = getObject(parent_name);
    let old_count = count;
    if (count == 0) {
        lastSeenChildren = new Array();
        parent.fill = "Purple";
        parent.alpha = 1;
        seen_children.push(parent_name);
    }
    lastSeenChildren.push(parent);
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
                        if (targetChild == child_name) {
                            links = [];
                            lastSeenChildren.push(child);
                            for(i=1;i<lastSeenChildren.length;i++) {
                                links.push([lastSeenChildren[i-1], lastSeenChildren[i]]);
                            }
                            lastSeenChildren.pop();
                            console.log(links);
                        }
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
    lastSeenChildren.pop();
}

function drawConnectLine(parent, child) {
    dist = distance(parent.x,parent.y,child.x,child.y);
    scaled = (1/dist)*(child.r + 5);
    
    pX = (child.x-parent.x)*scaled+parent.x;
    pY = (child.y-parent.y)*scaled+parent.y;
    
    cX = (parent.x-child.x)*scaled+child.x;
    cY = (parent.y-child.y)*scaled+child.y;
    
    ctx.lineCap = 'round'
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.75;
    
    canvas_line(ctx, pX, pY, cX, cY);
    
    ctx.globalAlpha = 1;
}

function getObject(name) {
    name = name.toLowerCase();
    let object = null;
    for(let j=0;j<fixed_circles.length;j++) {
        current_name = fixed_circles[j].label;
        if (name == current_name.toLowerCase()) {
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
        
        circles[i].icon = new Image();
        circles[i].icon.src = "./images/" + circles[i].label.replace(' ', '_') + ".png";
        
        circles[i].icon.onload = () => {
            circles[i].draw();
        }
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
    ctx.strokeStyle = "black";
    
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
function Circle(label, icon, x, y, r, fill, stroke) {
    this.startingAngle = 0;
    this.endingAngle = 2 * Math.PI;
    this.isSelected = false;
    this.label = label;
    this.icon = icon;
    this.x = x;
    this.y = y;
    this.r = r;
    this.alpha = 1;
    this.recursion = 0;

    this.fill = fill;
    this.stroke = stroke;

    this.draw = function () {
<<<<<<< Updated upstream
        var iconImg = new Image();
        iconImg.src = "./images/" + this.label.replace(' ', '_') + ".png";
        
        iconImg.onload = () => {
            // save state as restoring is the only way to remove a clip-mask
=======
        if(this.isSelected) {
>>>>>>> Stashed changes
            ctx.save();
            ctx.arc(this.x, this.y, this.r*2, this.startingAngle, this.endingAngle);
            const gradient = ctx.createRadialGradient(this.x, this.y, this.r, this.x, this.y, this.r*1.5);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(1, "transparent");
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
<<<<<<< Updated upstream
            
            if (this.recursion > colors.length) {
                ctx.globalAlpha = 0.25;
                ctx.font = circle_radius.toString() + "px Arial ";
                ctx.fillStyle = "black";
                ctx.textAlign = "center";
                ctx.fillText(this.recursion, this.x, this.y+circle_radius/2.5);
            }
            
            ctx.globalAlpha = 1;
        };
=======
        }
        
        // save state as restoring is the only way to remove a clip-mask
        ctx.save();

        // define clip-mask using path operations
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startingAngle, this.endingAngle);
        
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.globalAlpha = this.alpha;
        
        ctx.lineCap = 'round'
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.stroke;
        ctx.stroke();
        
        ctx.clip();

        // draw in top image
        ctx.drawImage(this.icon, this.x-this.r, this.y-this.r, this.r*2, this.r*2);

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
>>>>>>> Stashed changes
    }
}

function canvasClick(e) {
    let clickX = e.pageX - canvas.offsetLeft;
    let clickY = e.pageY - canvas.offsetTop;

    for(let i=circles.length-1; i>=0; i--) {
        let circle = circles[i];

        let distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2))
        if (distanceFromCenter <= circle.r) {
            

            // clicked a circle while a second option was already selected
            if(circle == secondSelectedCircle && !isDragging) {
                firstSelectedCircle.isSelected = false;
                firstSelectedCircle = circle;
                
                circle.isSelected = true;
                parentInput.value = circle.label;
            }
            else {
                secondSelectedCircle.isSelected = false;
                circle.isSelected = true;
                
                secondSelectedCircle = circle;
                childInput.value = circle.label;
            }

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
    if (firstSelectedCircle != null) {
      let x = e.pageX - canvas.offsetLeft;
      let y = e.pageY - canvas.offsetTop;

      firstSelectedCircle.x = x;
      firstSelectedCircle.y = y;

      draw(true);
    }
  }
}
