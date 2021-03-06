class MyComplexTree extends CGFobject {
    constructor(scene,
                trunkHeight,
                trunkRadius,
                treeTopHeight,
                treeTopRadius,
                trunkTexture,
                treeTopTexture) {
        super(scene);

        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;

        this.trunk = new MyCylinder(this.scene, 10);
        this.treeTop = new MyCone(this.scene, 10, 1);
        
    }

    enableNormalViz() {
        this.trunk.enableNormalViz();
        this.treeTop.enableNormalViz();
    }
    disableNormalViz() {
        this.trunk.disableNormalViz();
        this.treeTop.disableNormalViz();
    }
    display() {
        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);

        // while mineToup
        // this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.diffuseMaterial.setTexture(this.trunkTexture);
        this.scene.diffuseMaterial.apply();

        this.trunk.display();
        this.scene.popMatrix();

        // while mineToup
        // this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.diffuseMaterial.setTexture(this.treeTopTexture);
        this.scene.diffuseMaterial.apply();

        for (var i = 0; i < 3; i++) {
            this.scene.pushMatrix();
            this.scene.translate(0, this.trunkHeight * (1 + i/2), 0);
            this.scene.scale(this.treeTopRadius * (1.25 - i/8), this.treeTopHeight, this.treeTopRadius * (1.25 - i/8));
            this.treeTop.display();
            this.scene.popMatrix();    
        }
    }

}