//src/controllers/registrationController.js
export const registerUser = async (req, res) => {
    const { username, password } = req.body; 

    try {


        res.status(201).json({ message: 'Пользователь успешно зарегистрирован.' });
    } catch (error) {
        console.error('Ошибка регистрации:', error);
        res.status(500).json({ message: 'Ошибка при регистрации пользователя.' });
    }
};
