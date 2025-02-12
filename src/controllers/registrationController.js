<<<<<<< HEAD
//src/controllers/registrationController.js
=======
>>>>>>> 54fe37f57f112ca125845b2dee8ae9855630670f
export const registerUser = async (req, res) => {
    const { username, password } = req.body; 

    try {


        res.status(201).json({ message: 'Пользователь успешно зарегистрирован.' });
    } catch (error) {
        console.error('Ошибка регистрации:', error);
        res.status(500).json({ message: 'Ошибка при регистрации пользователя.' });
    }
};
