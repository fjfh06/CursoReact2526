import React, { useState } from 'react';

const Ejercicio5 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};

    // Validar Email
    if (!email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!validateEmail(email)) {
      newErrors.email = "El formato del email no es válido";
    }

    // Validar Password
    if (!password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Formulario enviado correctamente: " + email);
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <div>
      <h2>Ejecicio 5: Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduce tu email"
            style={{ padding: '0.5rem', width: '100%', maxWidth: '300px' }}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Contraseña:</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
              style={{ padding: '0.5rem', flexGrow: 1, maxWidth: '200px' }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{ padding: '0.5rem', cursor: 'pointer' }}
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
          {errors.password && <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Ejercicio5;