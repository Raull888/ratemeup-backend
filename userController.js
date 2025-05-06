const users = []; // Temporal, luego será con base de datos

const registerUser = (req, res) => {
  const { username, email } = req.body;
  const newUser = { id: users.length + 1, username, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

const loginUser = (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);
  if (user) return res.json(user);
  res.status(404).json({ message: 'Usuario no encontrado' });
};

const getUserProfile = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) return res.json(user);
  res.status(404).json({ message: 'Perfil no encontrado' });
};

module.exports = { registerUser, loginUser, getUserProfile };
