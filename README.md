# Countly

Countly is a clean, modern counter app for keeping track of multiple things at once. It works directly in a web browser, saves counters locally on the device, and requires no build tools or installation.

## Features

- Create, rename, and remove counters
- Increase or decrease any counter
- Reset all counters at once
- View total count and number of active counters
- Light mode and dark mode
- Animated glass-style interface
- Yellow Hunt mode for the German yellow-car spotting game
- Yellow car logging for `+1` point
- Yellow motorcycle logging for `+0.5` points
- Animated yellow vehicles with exhaust trails
- Counters and preferences saved automatically in the browser
- Responsive layout for desktop and mobile screens

## Run Countly

No dependencies are required.

1. Download or clone this repository.
2. Open `index.html` in a modern web browser.

For the most reliable local experience, serve the folder with any simple static web server. For example, if Python is installed:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Using the app

Click `+` or `−` on a counter to change its value. Click a counter name to edit it. Use `Add counter` to create another counter and the `×` button to remove one. The reset icon in the top bar resets all current values to zero.

The theme button switches between light and dark mode. Countly remembers your choice for the next visit.

## Yellow Hunt mode

Select the taxi icon in the top bar to activate Yellow Hunt mode. The mode includes a short explanation of the game and gives each counter two special actions:

- Yellow car: adds 1 point
- Yellow motorcycle: adds 0.5 points

Each find triggers a playful vehicle animation across the screen. Select the taxi icon again to return to regular counter mode.

## Data and privacy

Countly has no backend and does not send counter data anywhere. Counters and preferences are stored in the browser's `localStorage` for the current device and browser. Clearing browser site data will remove saved counters.

## Browser support

Use a current version of Chrome, Edge, Firefox, Safari, or another browser with support for modern JavaScript, CSS animations, and `localStorage`.

## Project files

- `index.html` — app structure
- `styles.css` — responsive styling, themes, glass effects, and animations
- `app.js` — counters, persistence, modes, and interactions

## License

Countly is released under the [MIT License](LICENSE). You are free to use, modify, and redistribute the app, provided the license notice is retained.
