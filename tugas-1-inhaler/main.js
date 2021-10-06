function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    const gambar_kanan = {
        color_1: [0.780, 0.780, 0.780],
        color_2: [1, 1, 1],
        color_3: [0.109, 0.505, 0.890],


    }

    const gambar_kiri = {
        color_1: [0.921, 0.921, 0.921],
        color_2: [1, 1, 1],
        color_3: [0.109, 0.505, 0.890],

        v1: [-0.6, 0.34],
        w1: [-0.56, 0.38],
        z1: [-0.52, 0.4],
        a2: [-0.43, 0.428],
        b2: [-0.28, 0.4],
        c2: [-0.24, 0.38],
        d2: [-0.2, 0.34],
        e2: [-0.48, 0.42],
        f2: [-0.32, 0.42],
        g2: [-0.44, 0.427],
        h2: [-0.36, 0.427],
        i2: [-0.6, -0.42],
        j2: [-0.2, -0.42],
        k2: [-0.4, -0.49],
        l2: [-0.514, -0.462],
        m2: [-0.284, -0.46],
        n2: [-0.56, -0.44],
        o2: [-0.24, -0.44],
        p2: [-0.46, -0.48],
        q2: [-0.34, -0.48],
        r2: [-0.6, -0.25],
        s2: [-0.2, -0.25],
        t2: [-0.4, -0.37],
        u2: [-0.5595, -0.3195],
        v2: [-0.24, -0.32],
        w2: [-0.514, -0.342],
        v2: [-0.24, -0.32],
        z2: [-0.284, -0.34],
        a3: [-0.4595, -0.3595],
        b3: [-0.3395, -0.3595],
        c3: [-0.6, 0.26],
        d3: [-0.2, 0.26],
        e3: [-0.56, 0.24],
        f3: [-0.24, 0.24],
        g3: [-0.52, 0.22],
        h3: [-0.28, 0.22],
        i3: [-0.48, 0.21],
        j3: [-0.32, 0.21],
        k3: [-0.4, 0.2],
        l3: [-0.44, 0.205],
        m3: [-0.36, 0.205],
        n3: [-0.43, 0.37],
        o3: [-0.4, 0.36],
        p3: [-0.43, 0.45],
        q3: [-0.42, 0.47],
        r3: [-0.4, 0.49],
        s3: [-0.37, 0.4],
        t3: [-0.37, 0.49],
        u3: [-0.395, 0.45],
        v3: [-0.37, 0.428],
        w3: [-0.62, -0.28],
        z3: [-0.62, -0.4],
        a4: [-0.18, -0.28],
        b4: [-0.18, -0.4]

    }

    var vertices = [
        //tempat gantungan
        ...gambar_kiri.t3, ...gambar_kiri.color_1,
        ...gambar_kiri.u3, ...gambar_kiri.color_1,
        ...gambar_kiri.r3, ...gambar_kiri.color_1,

        ...gambar_kiri.u3, ...gambar_kiri.color_1,
        ...gambar_kiri.r3, ...gambar_kiri.color_1,
        ...gambar_kiri.q3, ...gambar_kiri.color_1,

        ...gambar_kiri.q3, ...gambar_kiri.color_1,
        ...gambar_kiri.u3, ...gambar_kiri.color_1,
        ...gambar_kiri.p3, ...gambar_kiri.color_1,

        ...gambar_kiri.u3, ...gambar_kiri.color_1,
        ...gambar_kiri.p3, ...gambar_kiri.color_1,
        ...gambar_kiri.a2, ...gambar_kiri.color_1,

        ...gambar_kiri.a2, ...gambar_kiri.color_1,
        ...gambar_kiri.u3, ...gambar_kiri.color_1,
        ...gambar_kiri.o3, ...gambar_kiri.color_1,

        ...gambar_kiri.a2, ...gambar_kiri.color_1,
        ...gambar_kiri.n3, ...gambar_kiri.color_1,
        ...gambar_kiri.o3, ...gambar_kiri.color_1,

        ...gambar_kiri.v3, ...gambar_kiri.color_1,
        ...gambar_kiri.u3, ...gambar_kiri.color_1,
        ...gambar_kiri.o3, ...gambar_kiri.color_1,

        ...gambar_kiri.v3, ...gambar_kiri.color_1,
        ...gambar_kiri.s3, ...gambar_kiri.color_1,
        ...gambar_kiri.o3, ...gambar_kiri.color_1,

        ...gambar_kiri.v3, ...gambar_kiri.color_1,
        ...gambar_kiri.u3, ...gambar_kiri.color_1,
        ...gambar_kiri.t3, ...gambar_kiri.color_1,

        //putih atas
        ...gambar_kiri.c3, ...gambar_kiri.color_2,
        ...gambar_kiri.e3, ...gambar_kiri.color_2,
        ...gambar_kiri.v1, ...gambar_kiri.color_2,

        ...gambar_kiri.e3, ...gambar_kiri.color_2,
        ...gambar_kiri.v1, ...gambar_kiri.color_2,
        ...gambar_kiri.w1, ...gambar_kiri.color_2,

        ...gambar_kiri.e3, ...gambar_kiri.color_2,
        ...gambar_kiri.g3, ...gambar_kiri.color_2,
        ...gambar_kiri.w1, ...gambar_kiri.color_2,

        ...gambar_kiri.z1, ...gambar_kiri.color_2,
        ...gambar_kiri.g3, ...gambar_kiri.color_2,
        ...gambar_kiri.w1, ...gambar_kiri.color_2,

        ...gambar_kiri.z1, ...gambar_kiri.color_2,
        ...gambar_kiri.g3, ...gambar_kiri.color_2,
        ...gambar_kiri.i3, ...gambar_kiri.color_2,

        ...gambar_kiri.z1, ...gambar_kiri.color_2,
        ...gambar_kiri.e2, ...gambar_kiri.color_2,
        ...gambar_kiri.i3, ...gambar_kiri.color_2,

        ...gambar_kiri.l3, ...gambar_kiri.color_2,
        ...gambar_kiri.e2, ...gambar_kiri.color_2,
        ...gambar_kiri.i3, ...gambar_kiri.color_2,

        ...gambar_kiri.l3, ...gambar_kiri.color_2,
        ...gambar_kiri.e2, ...gambar_kiri.color_2,
        ...gambar_kiri.g2, ...gambar_kiri.color_2,

        ...gambar_kiri.l3, ...gambar_kiri.color_2,
        ...gambar_kiri.a2, ...gambar_kiri.color_2,
        ...gambar_kiri.g2, ...gambar_kiri.color_2,

        ...gambar_kiri.l3, ...gambar_kiri.color_2,
        ...gambar_kiri.a2, ...gambar_kiri.color_2,
        ...gambar_kiri.n3, ...gambar_kiri.color_2,

        ...gambar_kiri.l3, ...gambar_kiri.color_2,
        ...gambar_kiri.k3, ...gambar_kiri.color_2,
        ...gambar_kiri.n3, ...gambar_kiri.color_2,

        ...gambar_kiri.o3, ...gambar_kiri.color_2,
        ...gambar_kiri.k3, ...gambar_kiri.color_2,
        ...gambar_kiri.n3, ...gambar_kiri.color_2,

        ...gambar_kiri.o3, ...gambar_kiri.color_2,
        ...gambar_kiri.k3, ...gambar_kiri.color_2,
        ...gambar_kiri.m3, ...gambar_kiri.color_2,

        ...gambar_kiri.o3, ...gambar_kiri.color_2,
        ...gambar_kiri.s3, ...gambar_kiri.color_2,
        ...gambar_kiri.m3, ...gambar_kiri.color_2,

        ...gambar_kiri.j3, ...gambar_kiri.color_2,
        ...gambar_kiri.s3, ...gambar_kiri.color_2,
        ...gambar_kiri.m3, ...gambar_kiri.color_2,

        ...gambar_kiri.j3, ...gambar_kiri.color_2,
        ...gambar_kiri.s3, ...gambar_kiri.color_2,
        ...gambar_kiri.v3, ...gambar_kiri.color_2,

        ...gambar_kiri.j3, ...gambar_kiri.color_2,
        ...gambar_kiri.h3, ...gambar_kiri.color_2,
        ...gambar_kiri.v3, ...gambar_kiri.color_2,

        ...gambar_kiri.v3, ...gambar_kiri.color_2,
        ...gambar_kiri.h3, ...gambar_kiri.color_2,
        ...gambar_kiri.h2, ...gambar_kiri.color_2,

        ...gambar_kiri.f3, ...gambar_kiri.color_2,
        ...gambar_kiri.h3, ...gambar_kiri.color_2,
        ...gambar_kiri.h2, ...gambar_kiri.color_2,

        ...gambar_kiri.f3, ...gambar_kiri.color_2,
        ...gambar_kiri.h2, ...gambar_kiri.color_2,
        ...gambar_kiri.f2, ...gambar_kiri.color_2,

        ...gambar_kiri.f3, ...gambar_kiri.color_2,
        ...gambar_kiri.d3, ...gambar_kiri.color_2,
        ...gambar_kiri.f2, ...gambar_kiri.color_2,

        ...gambar_kiri.b2, ...gambar_kiri.color_2,
        ...gambar_kiri.d3, ...gambar_kiri.color_2,
        ...gambar_kiri.f2, ...gambar_kiri.color_2,

        ...gambar_kiri.b2, ...gambar_kiri.color_2,
        ...gambar_kiri.d3, ...gambar_kiri.color_2,
        ...gambar_kiri.c2, ...gambar_kiri.color_2,

        ...gambar_kiri.d2, ...gambar_kiri.color_2,
        ...gambar_kiri.d3, ...gambar_kiri.color_2,
        ...gambar_kiri.c2, ...gambar_kiri.color_2,

        //body biru

        ...gambar_kiri.r2, ...gambar_kiri.color_3,
        ...gambar_kiri.c3, ...gambar_kiri.color_3,
        ...gambar_kiri.u2, ...gambar_kiri.color_3,

        ...gambar_kiri.c3, ...gambar_kiri.color_3,
        ...gambar_kiri.e3, ...gambar_kiri.color_3,
        ...gambar_kiri.u2, ...gambar_kiri.color_3,

        ...gambar_kiri.w2, ...gambar_kiri.color_3,
        ...gambar_kiri.e3, ...gambar_kiri.color_3,
        ...gambar_kiri.u2, ...gambar_kiri.color_3,

        ...gambar_kiri.w2, ...gambar_kiri.color_3,
        ...gambar_kiri.e3, ...gambar_kiri.color_3,
        ...gambar_kiri.g3, ...gambar_kiri.color_3,

        ...gambar_kiri.w2, ...gambar_kiri.color_3,
        ...gambar_kiri.a3, ...gambar_kiri.color_3,
        ...gambar_kiri.g3, ...gambar_kiri.color_3,

        ...gambar_kiri.i3, ...gambar_kiri.color_3,
        ...gambar_kiri.a3, ...gambar_kiri.color_3,
        ...gambar_kiri.g3, ...gambar_kiri.color_3,

        ...gambar_kiri.i3, ...gambar_kiri.color_3,
        ...gambar_kiri.a3, ...gambar_kiri.color_3,
        ...gambar_kiri.t2, ...gambar_kiri.color_3,

        ...gambar_kiri.i3, ...gambar_kiri.color_3,
        ...gambar_kiri.l3, ...gambar_kiri.color_3,
        ...gambar_kiri.t2, ...gambar_kiri.color_3,

        ...gambar_kiri.b3, ...gambar_kiri.color_3,
        ...gambar_kiri.l3, ...gambar_kiri.color_3,
        ...gambar_kiri.t2, ...gambar_kiri.color_3,

        ...gambar_kiri.b3, ...gambar_kiri.color_3,
        ...gambar_kiri.l3, ...gambar_kiri.color_3,
        ...gambar_kiri.k3, ...gambar_kiri.color_3,

        ...gambar_kiri.b3, ...gambar_kiri.color_3,
        ...gambar_kiri.z2, ...gambar_kiri.color_3,
        ...gambar_kiri.k3, ...gambar_kiri.color_3,

        ...gambar_kiri.m3, ...gambar_kiri.color_3,
        ...gambar_kiri.z2, ...gambar_kiri.color_3,
        ...gambar_kiri.k3, ...gambar_kiri.color_3,

        ...gambar_kiri.m3, ...gambar_kiri.color_3,
        ...gambar_kiri.z2, ...gambar_kiri.color_3,
        ...gambar_kiri.v2, ...gambar_kiri.color_3,

        ...gambar_kiri.m3, ...gambar_kiri.color_3,
        ...gambar_kiri.j3, ...gambar_kiri.color_3,
        ...gambar_kiri.v2, ...gambar_kiri.color_3,

        ...gambar_kiri.h3, ...gambar_kiri.color_3,
        ...gambar_kiri.j3, ...gambar_kiri.color_3,
        ...gambar_kiri.v2, ...gambar_kiri.color_3,

        ...gambar_kiri.h3, ...gambar_kiri.color_3,
        ...gambar_kiri.f3, ...gambar_kiri.color_3,
        ...gambar_kiri.v2, ...gambar_kiri.color_3,

        ...gambar_kiri.s2, ...gambar_kiri.color_3,
        ...gambar_kiri.f3, ...gambar_kiri.color_3,
        ...gambar_kiri.v2, ...gambar_kiri.color_3,

        ...gambar_kiri.s2, ...gambar_kiri.color_3,
        ...gambar_kiri.f3, ...gambar_kiri.color_3,
        ...gambar_kiri.d3, ...gambar_kiri.color_3,

        ...gambar_kiri.w3, ...gambar_kiri.color_3,
        ...gambar_kiri.r2, ...gambar_kiri.color_3,
        ...gambar_kiri.u2, ...gambar_kiri.color_3,

        ...gambar_kiri.s2, ...gambar_kiri.color_3,
        ...gambar_kiri.v2, ...gambar_kiri.color_3,
        ...gambar_kiri.a4, ...gambar_kiri.color_3,

        // tutup putih bawah
        ...gambar_kiri.z3, ...gambar_kiri.color_2,
        ...gambar_kiri.w3, ...gambar_kiri.color_2,
        ...gambar_kiri.i2, ...gambar_kiri.color_2,

        ...gambar_kiri.i2, ...gambar_kiri.color_2,
        ...gambar_kiri.w3, ...gambar_kiri.color_2,
        ...gambar_kiri.u2, ...gambar_kiri.color_2,

        ...gambar_kiri.u2, ...gambar_kiri.color_2,
        ...gambar_kiri.n2, ...gambar_kiri.color_2,
        ...gambar_kiri.i2, ...gambar_kiri.color_2,

        ...gambar_kiri.u2, ...gambar_kiri.color_2,
        ...gambar_kiri.n2, ...gambar_kiri.color_2,
        ...gambar_kiri.l2, ...gambar_kiri.color_2,

        ...gambar_kiri.u2, ...gambar_kiri.color_2,
        ...gambar_kiri.w2, ...gambar_kiri.color_2,
        ...gambar_kiri.l2, ...gambar_kiri.color_2,

        ...gambar_kiri.p2, ...gambar_kiri.color_2,
        ...gambar_kiri.w2, ...gambar_kiri.color_2,
        ...gambar_kiri.l2, ...gambar_kiri.color_2,

        ...gambar_kiri.p2, ...gambar_kiri.color_2,
        ...gambar_kiri.w2, ...gambar_kiri.color_2,
        ...gambar_kiri.a3, ...gambar_kiri.color_2,

        ...gambar_kiri.p2, ...gambar_kiri.color_2,
        ...gambar_kiri.k2, ...gambar_kiri.color_2,
        ...gambar_kiri.a3, ...gambar_kiri.color_2,

        ...gambar_kiri.t2, ...gambar_kiri.color_2,
        ...gambar_kiri.k2, ...gambar_kiri.color_2,
        ...gambar_kiri.a3, ...gambar_kiri.color_2,

        ...gambar_kiri.t2, ...gambar_kiri.color_2,
        ...gambar_kiri.k2, ...gambar_kiri.color_2,
        ...gambar_kiri.q2, ...gambar_kiri.color_2,

        ...gambar_kiri.t2, ...gambar_kiri.color_2,
        ...gambar_kiri.b3, ...gambar_kiri.color_2,
        ...gambar_kiri.q2, ...gambar_kiri.color_2,

        ...gambar_kiri.m2, ...gambar_kiri.color_2,
        ...gambar_kiri.b3, ...gambar_kiri.color_2,
        ...gambar_kiri.q2, ...gambar_kiri.color_2,

        ...gambar_kiri.m2, ...gambar_kiri.color_2,
        ...gambar_kiri.b3, ...gambar_kiri.color_2,
        ...gambar_kiri.z2, ...gambar_kiri.color_2,

        ...gambar_kiri.m2, ...gambar_kiri.color_2,
        ...gambar_kiri.z2, ...gambar_kiri.color_2,
        ...gambar_kiri.o2, ...gambar_kiri.color_2,

        ...gambar_kiri.v2, ...gambar_kiri.color_2,
        ...gambar_kiri.z2, ...gambar_kiri.color_2,
        ...gambar_kiri.o2, ...gambar_kiri.color_2,

        ...gambar_kiri.v2, ...gambar_kiri.color_2,
        ...gambar_kiri.j2, ...gambar_kiri.color_2,
        ...gambar_kiri.o2, ...gambar_kiri.color_2,

        ...gambar_kiri.v2, ...gambar_kiri.color_2,
        ...gambar_kiri.j2, ...gambar_kiri.color_2,
        ...gambar_kiri.a4, ...gambar_kiri.color_2,

        ...gambar_kiri.b4, ...gambar_kiri.color_2,
        ...gambar_kiri.j2, ...gambar_kiri.color_2,
        ...gambar_kiri.a4, ...gambar_kiri.color_2,
    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard
    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    var speed = 0.0106;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {

        if (vertices[4131] < -1.0 || vertices[3711] > 1.0) {
            speed = speed * -1;
        }

        for (let i = 2161; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }


    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.588, 0.588, 0.588, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 870;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}