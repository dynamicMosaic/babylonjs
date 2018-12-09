var createScene = function () {
    var scene = new BABYLON.Scene(engine);

    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0,100,100), scene);
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, new BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);


    // Boxes
    var box1 = BABYLON.Mesh.CreateBox('Box1', 10.0, scene);
    box1.position.x = -20;
    var box2 = BABYLON.Mesh.CreateBox('Box2', 10.0, scene);

    var materialBox = new BABYLON.StandardMaterial('texture1', scene);
    materialBox.diffuseColor = new BABYLON.Color3(0,1,0); // Green
    var materialBox2 = new BABYLON.StandardMaterial('texture2', scene);
    
    // Apply Materials
    box1.material = materialBox;
    box2.material = materialBox2;

    // Box Position
    box2.position.x = 20;



// Start Box 1 Animation


// Create scaling animation at 30 FPS
var animationBox = new BABYLON.Animation("tutoAnimation", "scaling.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

// Loop Mode chose above at '_CYCLE'

// Various loop mode options: 
    // 1. Use previous value and increment (BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE)
    // 2. Restart from initial value (BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
    // 3. Keep the final value (BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)




    




}