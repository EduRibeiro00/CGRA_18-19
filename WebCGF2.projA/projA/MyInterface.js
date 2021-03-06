/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        this.gui.add(this.scene, 'displayAxis').name("Display Axis");

        this.gui.add(this.scene, 'displayNormals').name("Display normals");

        this.gui.add(this.scene, 'textsEnable').name("Enable Textures").onChange(this.scene.updateTextures.bind(this.scene));

        this.gui.add(this.scene, 'timeOfDay', this.scene.times).name("Time of day").onChange(this.scene.updateTimeOfDay.bind(this.scene));

        this.gui.add(this.scene.lights[0], 'enabled').name("Default Light");

        // a folder for grouping parameters for one of the lights
        var f0 = this.gui.addFolder('Custom Light');
        f0.add(this.scene, 'customLight').name("Custom Light").onChange(this.scene.updateCustomLight.bind(this.scene));
        // a subfolder for grouping only the three coordinates of the light
        var sf0 = f0.addFolder('Custom Light Position');
        sf0.add(this.scene.lights[1].position, '0', -25.0, 25.0).name("X Position");
        sf0.add(this.scene.lights[1].position, '1', 0, 25.0).name("Y Position");
        sf0.add(this.scene.lights[1].position, '2', -25.0, 25.0).name("Z Position");
            
        return true;
    }
}