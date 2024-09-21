import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getRelativeTime(date: Date | string): string {
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

    const now = new Date()
    const inputDate = typeof date === 'string' ? new Date(date) : date
    const diffInSeconds = Math.floor((inputDate.getTime() - now.getTime()) / 1000)

    const intervals: { [key: string]: number } = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    }

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        if (Math.abs(diffInSeconds) >= secondsInUnit || unit === 'second') {
            const count = Math.floor(diffInSeconds / secondsInUnit)
            return rtf.format(count, unit as Intl.RelativeTimeFormatUnit)
        }
    }

    return ''
}

export function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
