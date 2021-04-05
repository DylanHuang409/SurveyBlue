import { StyleSheet } from 'react-native' 

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 40,
  },
  titleText: {
    fontFamily: 'din-regular',
    fontSize: 25,
    color: '#333',
    lineHeight: 40
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    margin: 5,
  },
});

export const globalVariables = {
  welcomeCompleted: false,
  month: 'Select a Month',
  day: 'Select a Day',
  year: 'Select a Year',
  isVaccinated: false,
  color: 'Select a Color',
  food: 'Select a Cuisine',
  music: 'Select a Genre',
}