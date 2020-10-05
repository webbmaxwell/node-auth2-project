const jwt = require('jsonwebtoken');
const { router } = require('../api/server');
const { isValid } = require('../users/users-service');

router.post('/register', (req, res) => {
    const credentials = req.body;
    
    if(isValid(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 8;
        
    }
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    if (isValid(req.body)) {
        Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token
                })
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })

        function generateToken(user) {
            const payload = {
                subject: user.id,
                username: user.username
            }

            const options = {
                expiresIn: '1d'
            };

            return jwt.sign(payload, secrets.jwtSecret, options);
        }
    }
});

    


