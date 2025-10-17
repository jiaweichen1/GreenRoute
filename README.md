# GreenRoute - Ride Sharing Application

A modern ride-sharing platform designed for campus and workplace communities to reduce emissions and build community through shared commutes.

## 🚀 Features

- **User Authentication**: Secure JWT-based authentication
- **Trip Management**: Create and manage ride-sharing trips
- **Real-time Matching**: Find compatible rides based on location and timing
- **Community Focus**: Campus and workplace-specific communities
- **Modern UI**: Responsive design with smooth animations
- **Privacy First**: Location privacy and secure user verification

## 🏗️ Architecture

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Spring Boot 3.2.0 with Java 17
- **Database**: H2 (in-memory for development)
- **Security**: Spring Security with JWT
- **Authentication**: JWT tokens with role-based access

## 📁 Project Structure

```
GreenRoute/
├── Frontend/
│   ├── landing.html          # Main landing page
│   ├── login.html           # User login page
│   └── dashboard.html       # User dashboard
├── Server/
│   ├── src/main/java/com/greenroute/
│   │   ├── GreenRouteApplication.java
│   │   ├── controller/      # REST API controllers
│   │   ├── model/          # JPA entities
│   │   ├── repository/     # Data repositories
│   │   ├── service/       # Business logic
│   │   ├── security/      # Security configuration
│   │   └── dto/           # Data transfer objects
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml            # Maven dependencies
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites

- **Java 17** or higher
- **Maven 3.6+**
- **Web browser** (Chrome, Firefox, Safari, Edge)

### Backend Setup

1. **Navigate to the Server directory**:
   ```bash
   cd Server
   ```

2. **Install dependencies and run the application**:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

3. **Verify the backend is running**:
   - Open http://localhost:8080/api/auth/test
   - You should see: `{"message": "Backend is running!", "status": "success"}`

4. **Access H2 Database Console** (optional):
   - Go to http://localhost:8080/h2-console
   - JDBC URL: `jdbc:h2:mem:greenroute`
   - Username: `sa`
   - Password: `password`

### Frontend Setup

1. **Open the landing page**:
   - Simply open `Frontend/landing.html` in your web browser
   - Or serve it using a local server:
     ```bash
     cd Frontend
     python -m http.server 8000
     # Then visit http://localhost:8000/landing.html
     ```

2. **Test the waitlist form**:
   - Fill out the form on the landing page
   - It should connect to the backend and show success/error messages

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - User login
- `GET /api/auth/test` - Test endpoint

### Trips
- `GET /api/trips/` - Get all active trips
- `POST /api/trips/` - Create new trip (requires authentication)
- `GET /api/trips/search` - Search trips by location/time
- `GET /api/trips/my-trips` - Get user's trips (requires authentication)
- `GET /api/trips/{id}` - Get specific trip
- `POST /api/trips/waitlist` - Join waitlist

### Example API Usage

**Register a new user**:
```bash
curl -X POST http://localhost:8080/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "email": "john@university.edu",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe",
    "organization": "University of California"
  }'
```

**Login**:
```bash
curl -X POST http://localhost:8080/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "password": "password123"
  }'
```

**Create a trip** (with JWT token):
```bash
curl -X POST http://localhost:8080/api/trips/ \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "pickupLocation": "Campus Library",
    "destination": "Downtown Office",
    "departureTime": "2024-01-15T08:00:00",
    "maxPassengers": 4,
    "costPerPassenger": 5.00
  }'
```

## 🎨 Frontend Features

### Landing Page (`landing.html`)
- **Hero Section**: Compelling value proposition with animated phone mockup
- **Features**: Eco-friendly, cost-saving, trusted groups
- **How It Works**: Step-by-step process explanation
- **Testimonials**: User feedback (removed per user request)
- **FAQ**: Common questions with interactive accordion
- **Waitlist Form**: Connected to backend API

### Login Page (`login.html`)
- **Clean Design**: Minimalist login form
- **Backend Integration**: Connects to Spring Boot authentication
- **Error Handling**: User-friendly error messages
- **Token Storage**: JWT tokens stored in localStorage

### Dashboard (`dashboard.html`)
- **User Profile**: Display user information
- **Trip Management**: Create and view trips
- **Search Functionality**: Find available rides
- **Responsive Design**: Works on mobile and desktop

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Encryption**: BCrypt password hashing
- **CORS Configuration**: Proper cross-origin resource sharing
- **Input Validation**: Server-side validation for all inputs
- **Role-based Access**: User and admin roles

## 🚀 Development

### Adding New Features

1. **Backend**: Add new controllers, services, and repositories
2. **Frontend**: Update HTML/CSS/JavaScript files
3. **Database**: Modify entities and run migrations

### Database Schema

**Users Table**:
- id, username, email, password, firstName, lastName, phoneNumber, organization, role, createdAt, updatedAt

**Trips Table**:
- id, driver_id, pickupLocation, destination, departureTime, arrivalTime, maxPassengers, currentPassengers, costPerPassenger, status, description, createdAt, updatedAt

**Trip Requests Table**:
- id, trip_id, rider_id, status, requestedAt, respondedAt, message

## 🐛 Troubleshooting

### Common Issues

1. **Backend won't start**:
   - Check Java version: `java -version` (should be 17+)
   - Check Maven: `mvn -version`
   - Clear Maven cache: `mvn clean`

2. **Frontend can't connect to backend**:
   - Ensure backend is running on port 8080
   - Check browser console for CORS errors
   - Verify API endpoints are accessible

3. **Database issues**:
   - H2 database resets on restart (this is normal for development)
   - Check application.properties for database configuration

### Logs

Backend logs are displayed in the console. For more detailed logging, modify `application.properties`:
```properties
logging.level.com.greenroute=DEBUG
logging.level.org.springframework.security=DEBUG
```

## 📱 Mobile Support

The frontend is fully responsive and works on:
- Desktop browsers
- Mobile browsers (iOS Safari, Android Chrome)
- Tablet devices

## 🔮 Future Enhancements

- Real-time notifications
- In-app messaging
- Payment integration
- Advanced matching algorithms
- Mobile app (React Native/Flutter)
- Push notifications
- Trip tracking and sharing

## 📄 License

This project is for educational and demonstration purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Happy coding! 🚗💚**