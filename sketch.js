let table

// Layered bottom to top (image at the furthermost back is at the top of the list)

function preload() {

    toros = createImg("toros.jpg");
    
    pChino = createImg("Papel_Chino.png");
    pChino3 = createImg("Papel_Chino.png");
    pChino2 = createImg("Papel_Chino.png");

    // background items
    
    tri = createImg("Blair-Cincinnati-RB-Camera.webp");

    //TABLE
    table = createImg("Table.png");
    mantel1 = createImg("mantel.jpg");
    
    
    
    // items on the table
    catrina = createImg("Catrina.png");
    flor = createImg("Flor_1.avif");
    tony = createImg("FB_IMG_1760380455186.jpg");
    frame = createImg("Frame.png");
    candles = createImg("candles.gif");
    pepper = createImg("DrPepper.gif");
    cap = createImg("Tony Cap.png");
    spin = createImg("spin.gif");
    pan = createImg("pan_muerto.webp");
    camera = createImg("camerav.png");


    spinS = createImg("spinning-skull.gif");
    bolt = createImg("Bolt.png");
    rockin = createImg("rockingchair.gif");
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
 
    cap.position(1000,700)
    cap.size(250,250);

    catrina.position(250,350)
    catrina.size(500,500);

    candles.position(700,600)

    spin.position(150,820)
    spin.size(100,100);

    pan.position(500,750)
    pan.size(200,200);

    mantel1.position(300,800)
    mantel1.size(800,400);

    tri.position(500,300)
    tri.size(1000,1000);

    camera.position(280,790)
    camera.size(200,120);
    
    toros.position(40,300)
    toros.size(750,500);

    spinS.position(1000,400)
    spinS.size(400,400);

    rockin.position(800,700)
    rockin.size(800,800);

    
}