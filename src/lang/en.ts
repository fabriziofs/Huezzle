import { Animations, Mode, Theme } from '@/entities/Settings'
import { Difficulty } from '@/services/DifficultyGenerator'

export const en = {
  clipboard_button_label: 'Copy to clipboard',
  credits_developer: 'a game developed by',
  credits_family: 'and especially to my family and friends',
  credits_header: 'Huezzle',
  credits_libraries: 'All the people who have developed the libraries and tools that have helped me create this game',
  credits_sub_thanks: 'for supporting the development, providing ideas, and helping test the game',
  credits_thanks: 'Thanks',
  difficulty: {
    [Difficulty.easy]: 'Easy',
    [Difficulty.hard]: 'Hard',
    [Difficulty.normal]: 'Normal',
    all: 'All'
  },
  footer_hints_button_label: 'Show hint {hints}/3',
  footer_settings_button_label: 'Settings',
  footer_statistics_button_label: 'View stats',
  footer_victory_button_label: 'View score',
  meta_description: 'A new puzzle every day, sort the colored cells and compete against your friends and family.',
  meta_title: 'Huezzle - Your daily puzzle',
  new_puzzle_button: 'Go',
  new_puzzle_message: 'There is a new Huezzle available!',
  popup_close: 'Close',
  settings_animations_button: {
    [Animations.disabled]: 'Disabled',
    [Animations.fast]: 'Fast',
    [Animations.normal]: 'Normal',
    [Animations.slow]: 'Slow'
  },
  settings_animations_label: 'Animations',
  settings_credits_button: 'Show',
  settings_credits_label: 'Credits',
  settings_header: 'Settings',
  settings_language_auto: 'Auto (English)',
  settings_language_label: 'Language',
  settings_language_name: 'English',
  settings_mode_button: {
    [Mode.both]: 'Both',
    [Mode.grab]: 'Grab',
    [Mode.touch]: 'Touch'
  },
  settings_mode_label: 'Swap mode',
  settings_support_label: 'Support developer',
  settings_theme_button: {
    [Theme.auto]: 'Auto',
    [Theme.dark]: 'Dark',
    [Theme.light]: 'Light'
  },
  settings_theme_label: 'Theme',
  settings_tutorial_button: 'Restart',
  settings_tutorial_label: 'Tutorial',
  share_button_label: 'Share',
  share_message: 'The Huezzle of the day #{number}:\n🕑 Time: {time}\n🔄 Movements: {movements}\n💡 Hints: {hints}\n',
  statistics_average_movements: 'Average movements',
  statistics_average_time: 'Average time',
  statistics_best_movements: 'Best movements',
  statistics_best_time: 'Best time',
  statistics_header: 'Statistics',
  statistics_played_games: 'Played games',
  statistics_requested_hints: 'Hints',
  statistics_total_movements: 'Total movements',
  statistics_total_time: 'Total time',
  tutorial_grab_message: 'Drag one cell over another to swap their positions',
  tutorial_sort_message: 'Sort all cells again to win',
  tutorial_start_message: 'Touch to start',
  tutorial_touch_message: 'Touch one cell and then another to swap their positions',
  tweet_button_label: 'Post',
  twitter_tips_1: 'Follow',
  twitter_tips_2: 'on X to get daily tips and stay updated on all the latest developments.',
  updates_downloading_message: 'Downloading update...',
  updates_ready_button: 'Apply',
  updates_ready_message: 'Update ready!',
  victory_header: 'Victory!',
  victory_movements_label: 'Movements:',
  victory_next_huezzle_label: 'Next Huezzle:',
  victory_time_label: 'Time:'
}
