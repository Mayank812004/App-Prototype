import { StyleSheet } from 'react-native';

// Corrected theme variables
const lightTheme = {
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
};

const darkTheme = {
  backgroundColor: '#1E1E1E',
  textColor: '#FFFFFF',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  getStartedText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  dgetStartedText: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  outerBox: {
    display: 'flex',
    height: '70%',
    backgroundColor: '#f0f0f0', // Light gray background
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 0.25,
    shadowRadius: 3.4,
    elevation: 0,
    marginBottom: 20,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerInputBox: {
    backgroundColor: '#e0e0e0', // Slightly darker gray
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 0.25,
    shadowRadius: 3.4,
    elevation: 6,
    marginBottom: 20,
    padding: 2,
    width: 350,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50', // Button color remains green
    height: 45,
    padding: 10,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  cartbutton: {
    flex: 1,
    backgroundColor: '#FF6347', // Tomato color for buttons
    height: 45,
    padding: 10,
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '100%',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  loggedInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInText: {
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 20,
  },
  productList: {
    padding: 20,
  },
  productContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textContainer: {
    backgroundColor: '#fff',
    height: 'auto',
    width: 'auto',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  douterBox: {
    display: 'flex',
    height: '70%',
    backgroundColor: 'rgba(1, 32, 78, .9)',
    borderRadius: 10,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 0.25,
    shadowRadius: 3.4,
    elevation: 0,
    borderWidth: 1,
    borderColor: '#7735b0',
    marginBottom: 20,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  douterInputBox: {
    backgroundColor: '#402E7A',
    borderRadius: 10,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 0.25,
    shadowRadius: 3.4,
    elevation: 6,
    marginBottom: 20,
    padding: 2,
    width: 350,
    alignItems: 'center',
  },
  dinput: {
    color: 'white',
    backgroundColor: '#000',
    height: 50,
    width: '100%',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  dheaderText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '300',
    marginBottom: 20,
  },
  dloggedInText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 20,
  },

  // Added styles for specific pages
  dashboardBackground: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the entire area
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light gray color
  },
  loginPageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light gray color
  },
  productPageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light gray color
  },
});

export default styles;
