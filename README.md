# Audiscribe

A free, community-driven transcription platform powered by AssemblyAI. It offers intelligent speaker recognition, time-synced navigation, and polished document exports. With support for multiple file formats, fast processing times, and a privacy-first approach, it’s designed to make professional transcription tools accessible to everyone.

## 📸 Snippet

![Audiscribe transcription overview](/public/og-image.png)

## ✨ Features

### Intelligent Transcription Tools
- 🗣️ Speaker Recognition: Automatically detects and labels speakers with customizable names
- ⏳ Time-Synced Navigation: Click on any word to jump directly to its timestamp in the audio
- 📋 Professional Document Export: Generate polished, ready-to-use Word documents with speaker tags and timestamps.

### File Compatibility

- 🎵 Broad Format Support: Handles popular audio formats like MP3, WAV, and AAC, as well as video formats such as MP4 and MOV.
- 📂 Large File Support: Process files up to 50MB and 10 hours long with ease.

### User Experience
- ⚡ Fast Transcription: Convert hours of audio into text in under a minute.
- 🌐 Accessible Design: Fully responsive interface optimized for both desktop and mobile.
- 🎯 Intuitive Workflow: Streamlined navigation and editing tools for hassle-free transcription.

### Privacy & Security
- 🛡️ Privacy First: Files are auto-deleted post-transcription; no data is stored.
- 🔐 Secure Processing: Ensures your uploads remain confidential throughout.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager
- A modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/umarsaeedalam/audiscribe.git
```
2. Navigate to the project directory:
```bash
cd audiscribe
```
3. Install dependencies
```bash
npm install
# or
yarn install
```
4. Set up environment variables:
Create a `.env.local` file in the root directory and add the following variable:
```bash
# AssemblyAI
NEXT_PUBLIC_ASSEMBLY_AI_API_KEY=your_assemblyai_api_key
```
5. Run the development server
```bash
npm run dev
# or
yarn dev
```
6. Open http://localhost:3000 in your browser.

## 🛠️ Tech Stack

### Frontend
- **Next.js** - React framework for production
- **React** - UI library
- **TypeScript** - Static typing
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - UI component library
- **NextUi** - UI component library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 📱 Responsive Design

Audiscribe is built with a desktop-first approach, ensuring a seamless experience across all devices:

## 🎨 Theme Configuration

The application uses a custom theme with the following color palette:

```css
primary: {
  50: '#FFFFFF',   
  100: '#FAFAFA', 
  200: '#F8F8F8',  
  300: '#F5F5F5', 
  400: '#F0F0F0',  
  500: '#E8E8E8',   
  600: '#E0E0E0',   
  700: '#D8D8D8',  
  800: '#D0D0D0',  
  900: '#C8C8C8',   
}

secondary: {
  50: '#EAEAEB',    
  100: '#D4D4D6',   
  200: '#A9A9AD',  
  300: '#7E7E84',  
  400: '#54545B',  
  500: '#1A1A1E',   
  600: '#17171B',  
  700: '#141418',  
  800: '#111114',   
  900: '#0E0E11',   
}

accent: {
  50: '#FFF2EE',    
  100: '#FFE5DD',  
  200: '#FFCCBB',   
  300: '#FFB299',   
  400: '#FF9977',   
  500: '#FF7F50',   
  600: '#FF6637',   
  700: '#FF4D1F',   
  800: '#FF3306',  
  900: '#EC2A00', 
}
```

## 📝 Project Structure

```
audiscribe/
├── assemblyai/                                 
├── src/
│   ├── app/                            
│   ├── components/                     
│   │   ├── feature/                     
│   │   │   ├── faq/                     
│   │   │   ├── features/                
│   │   │   └── transcribe/              
│   │   ├── layout/                      
│   │   └── ui/                         
│   │       ├── shadcn/                  
│   ├── fonts/                         
│   ├── lib/                            
│   └── utils/                          
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📧 Contact

If you have any questions, feel free to reach out:

- Email: umarsaeedalam@gmail.com
- LinkedIn: www.linkedin.com/in/umarsaeedalam

