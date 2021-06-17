module.exports = {
    apps: [{
        name: 'API APP COIN Upbit',
        // exec_interpreter: "babel-node",
        script: "./demo/index.js",
        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        args: 'one two',
        instances: 1,
        exec_mode: "cluster",
        autorestart: true,
        // watch: true,
        max_memory_restart: '2G',
        // env: {
        //     NODE_ENV: 'development',
        //     PORT: 4567
        // },
        // env_production: {
        //     NODE_ENV: 'production',
        //     PORT: [9081, 4981],
        //     CI: false
        // }
    }],

    // deploy: {
    //     production: {
    //         user: 'node',
    //         host: '103.253.147.97',
    //         ref: 'origin/master',
    //         repo: 'git@github.com:repo.git',
    //         path: '/var/www/html/api-wefinex',
    //         'post-deploy': 'npm install && pm2 reload ecosystem.config.js'
    //     }
    // }
};