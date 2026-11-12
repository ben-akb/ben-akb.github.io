# Ben Akbari Portfolio — Add Projects, Photos, Videos, and Descriptions

This website is designed so you can update most of its project and School Life content by editing **one file: `portfolio-data.js`**. You do not need to edit `index.html`, `styles.css`, or `script.js` for normal updates.

## The simple process

1. Copy your photos and videos into the correct folders inside the website.
2. Open `portfolio-data.js` in Notepad or VS Code.
3. Copy an example below, change the filenames and wording, and save the file.
4. Refresh the website to preview your changes.
5. When everything looks right, upload both the edited `portfolio-data.js` and the new media files to GitHub, keeping the same folder structure.

Use short filenames without spaces, for example `robotics-team-01.jpg` or `stem-week-video.mp4`.

## 1. Add several photos and videos to an existing project

### Put the files in these folders

```text
assets/projects/       project cover photos and project photos
assets/videos/         project videos
```

Example:

```text
assets/projects/robotics-cover.jpg
assets/projects/robotics-building-01.jpg
assets/projects/robotics-building-02.jpg
assets/videos/robotics-demo.mp4
```

### Find the project in `portfolio-data.js`

Near the top of the file, find `window.PORTFOLIO_PROJECTS`. Each project has a `cover` and a `media` list. The `cover` is the image displayed on the project card. Add as many items as you like to `media`:

```js
{
  category: "STEAM / ENGINEERING",
  title: "Robotics Project",
  description: "A short summary shown below the project title.",
  hoverDescription: "Write a longer description here. Explain the learning goal, what you designed or built, the tools or technologies involved, the challenges you addressed, and what the project achieved.",
  cover: "assets/projects/robotics-cover.jpg",
  coverAlt: "A robotics project display",
  tags: ["Robotics", "Programming", "STEAM"],
  media: [
    {
      type: "image",
      src: "assets/projects/robotics-building-01.jpg",
      alt: "Building the robot",
      caption: "The first stage of construction"
    },
    {
      type: "image",
      src: "assets/projects/robotics-building-02.jpg",
      alt: "Testing the robot",
      caption: "Testing and improving the design"
    },
    {
      type: "video",
      src: "assets/videos/robotics-demo.mp4",
      poster: "assets/projects/robotics-cover.jpg",
      alt: "Robotics project demonstration",
      caption: "The finished robot in action"
    }
  ]
},
```

**Important:** This is a complete example of one project object. When adding it to your existing list, put a comma between it and the previous project. Do not add a comma after the last project object.

To add more photos or videos to an existing project, add more objects inside that project's `media: [ ... ]` list. Use `type: "image"` for photos and `type: "video"` for MP4 videos. Every media item needs its own `src` filename. Videos can also have a `poster` image, which is displayed before playback.

To add a completely new project, copy one complete project object, paste it inside `window.PORTFOLIO_PROJECTS`, and change the category, title, descriptions, cover, tags, and media list.

## 2. Add several photos and videos to one School Life album entry

You can use the School Life section in two ways:

- **A single photo per card:** best for individual moments.
- **A grouped album per card:** best for an event, trip, activity, or school year. One card can open a gallery containing many photos and videos.

Put School Life photos in `assets/school-life/`. Videos can go in `assets/videos/`.

Example files:

```text
assets/school-life/stem-week-cover.jpg
assets/school-life/stem-week-01.jpg
assets/school-life/stem-week-02.jpg
assets/videos/stem-week-highlights.mp4
```

Find `window.SCHOOL_LIFE_PHOTOS` in `portfolio-data.js` and add a grouped album entry like this:

```js
{
  caption: "STEAM Week",
  note: "SCHOOL LIFE",
  alt: "Students taking part in STEAM Week activities",
  cover: "assets/school-life/stem-week-cover.jpg",
  hoverDescription: "Write a longer story about this event. You could describe the activities, the learning goals, the students' work, and what made the experience memorable.",
  media: [
    {
      type: "image",
      src: "assets/school-life/stem-week-01.jpg",
      alt: "A STEAM Week activity",
      caption: "Exploring the challenge"
    },
    {
      type: "image",
      src: "assets/school-life/stem-week-02.jpg",
      alt: "A student project display",
      caption: "Sharing the finished work"
    },
    {
      type: "video",
      src: "assets/videos/stem-week-highlights.mp4",
      poster: "assets/school-life/stem-week-cover.jpg",
      alt: "STEAM Week highlights",
      caption: "A short video from the event"
    }
  ]
},
```

The `cover` is the picture shown on the School Life card. The `media` list is what visitors see after opening that card. You can add as many photos or videos to the list as you need.

### Add just one School Life photo

The original simple format still works. You can continue to add one photo like this:

```js
{
  src: "assets/school-life/science-fair.jpg",
  alt: "A science fair display",
  caption: "Science fair day",
  note: "SCHOOL LIFE",
  hoverDescription: "Add a few sentences about the science fair, the activities, and what made the day special."
},
```

If you use the single-photo format, the card opens that one photo. Use the grouped album format above when you want one card to open several photos and videos.

## 3. Show a longer description when visitors hover over a card

Add the `hoverDescription` field to a project or School Life entry. For example:

```js
hoverDescription: "This project introduced students to the engineering design process. They planned, built, tested, and improved their prototypes while developing problem-solving and teamwork skills.",
```

On a computer, visitors can move the mouse over a project or School Life card to read the longer description. Keyboard users can focus the card to reveal it as well.

On phones and tablets there is no mouse hover, so a **Read the project description** or **Read the story** expandable section appears instead. Visitors can tap it to read the full text.

For projects, `description` is the short summary below the title. Use `hoverDescription` for the longer text displayed on hover. For School Life entries, use `hoverDescription` for the story behind the photo or album.

## 4. Photo and video rules

- Photos: `.jpg`, `.jpeg`, `.png`, or `.webp`.
- Videos: `.mp4` is recommended.
- Keep filenames simple and avoid spaces, for example `classroom-project-01.jpg`.
- The folder path and filename in the code must match the real file exactly. Capital letters matter on GitHub Pages: `IMG_0442.JPG` and `img_0442.jpg` are different filenames.
- Use a compressed MP4 and reasonably sized photos so the website loads quickly.
- Always add a photo `alt` description. Captions are optional but useful.
- For a video, include `poster` if you want a still image before the video starts.
- For a grouped School Life album, always provide a photo in `cover`; this is the image visitors see before opening the album.

## 5. Preview and publish

1. Save `portfolio-data.js`.
2. Open or refresh your local `index.html` in a browser and test every new card.
3. Click each project or School Life card to make sure all photos appear and the videos play.
4. Upload the updated `portfolio-data.js` and all new photo/video files to your existing GitHub repository. Keep the folders in the same locations.
5. Commit the changes and refresh your GitHub Pages website after it updates.

## 6. Privacy reminder

Only publish photos and videos you own or have permission to use. Before sharing identifiable photos or videos of students, check the school's media policy and make sure the appropriate permissions have been obtained.

## Other personal details

- Portrait: `assets/images/profile-photo.jpg`
- CV: `assets/Ben-Akbari-CV.pdf` (review the included draft or replace it with your final CV)
- GitHub: currently `https://github.com/benben`
- LinkedIn: replace `YOUR-LINKEDIN-SLUG` in `index.html` with your actual profile URL
- Email: replace `your-email@example.com` in `index.html` with your professional email address

## Main files

- `index.html` — page content and layout
- `styles.css` — colours, layout, responsive design, and hover effects
- `script.js` — project cards, School Life albums, galleries, and navigation
- `portfolio-data.js` — **the file you normally edit to add projects, photos, videos, and long descriptions**
