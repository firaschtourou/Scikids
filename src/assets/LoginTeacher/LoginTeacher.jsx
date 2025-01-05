import React, { useState } from "react";
import { InputField } from "./components/InputField";
import { useNavigate } from "react-router-dom"; // Import du hook useNavigate
import styles from "./LoginTeacher.module.css";

export const LoginTeacher = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialisation du hook useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logique de validation ou d'authentification
    if (email && password) {
      // Redirige vers la page Classes après un login réussi
      navigate("/classes");
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageColumn}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1de7c9a138aec5007ce5e5cb66301ca42321744f22d1420087ac6d750c8d173?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956"
            alt="Login illustration"
            className={styles.loginImage}
          />
        </div>
        <div className={styles.formColumn}>
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.headerWrapper}>
              <span className={styles.welcomeText}>Welcome back</span>
              <br />
              <span className={styles.loginTitle}>Login</span>
            </div>

            <InputField
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/aa0882931717549c444893dfe6e16c96b10f5eb1f36987e1c4d592100c19ceab?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />

            <InputField
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5159f41915bf938647886fa057e7c04e90bcd5b2c6077ec588ca3dcb1d8182ce?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />

            <div className={styles.rememberMeSection}>
              <div className={styles.rememberMeWrapper}>
                <input
                  type="checkbox"
                  id="remember"
                  className={styles.checkbox}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button type="button" className={styles.forgotPassword}>
                Forgot Password?
              </button>
            </div>

            <button type="submit" className={styles.loginButton}>
              Login
            </button>

            <div className={styles.registerPrompt}>
              Don't have an account?{" "}
              <span className={styles.registerLink}>Register</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
