/* General Styles */
body {
  font-family: 'Poppins', sans-serif;
  background-color: #f4f4f9;
  color: #333;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  text-align: center;
  padding: 20px;
}

/* Title */
h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 40px;
}

/* Category Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.category {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
}

.category:hover {
  transform: translateY(-10px);
}

.category img {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
}

.category h2 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #333;
}

.category button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.category button:hover {
  background-color: #0056b3;
}