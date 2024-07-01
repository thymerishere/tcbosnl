/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('hero.jpg')",
        'low-voltage-charging-profiles': "url('low-voltage-charging-profiles.png')",
        'gridshield': "url('gridshield.jpg')",
        'master-project': "url('master-project.jpg')",
        'profile': "url('profile.jpeg')",
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-indigo-.+/,
      pattern: /from-indigo-.+/,
      pattern: /to-indigo-.+/,
      pattern: /bg-green-.+/,
      pattern: /from-green-.+/,
      pattern: /to-green-.+/,
    }
  ]
}
