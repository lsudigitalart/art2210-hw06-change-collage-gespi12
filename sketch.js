let table

// Layered bottom to top (image at the furthermost back is at the top of the list)

function preload() {

    
    pChino = createImg("Papel_Chino.png");
    pChino3 = createImg("Papel_Chino.png");
    pChino2 = createImg("Papel_Chino.png");
    table = createImg("Table.png");
    bolt = createImg("Bolt.png");
    cap = createImg("Tony Cap.png");
    flor = createImg("Flor_1.avif");
    tony = createImg("FB_IMG_1760380455186.jpg");
    frame = createImg("Frame.png");
    pepper = createImg("DrPepper.gif");
    

}

function setup() {
    createCanvas(1500, 1500);

}

function draw() {
    background(220);

    bolt.position(0,1000)
    bolt.size(400,400);

    pChino.position(0,-75)
    pChino3.position(900,-75)
    pChino2.position(450,-75)

    tony.position(600,550)
    tony.size(225,300);

    pepper.position(420,610)
    pepper.size(130,300);
    
    table.position(100,400)
    table.size(1300,1300);

    frame.position(500,510)
    frame.size(400,400);

    flor.position(200,675)
    flor.size(400,200);
 
    cap.position(900,700)
    cap.size(250,250);
}