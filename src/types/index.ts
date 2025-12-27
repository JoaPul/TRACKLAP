export interface User {
    id: string;
    userName: string;
    email: string;
    role: 'Coach' | 'Athlete';
    strava?: {
        athleteId: number;
        isConnected: boolean;
    };
}

export interface Workout {
    _id: string;
    ownerId: string;
    name: string;
    description?: string;
    exercises: {
        name: string;
        sets: number;
        reps?: number;
        weight?: number;
        duration?: number; // in seconds
        notes?: string;
    }[];
}

export interface Shoe {
    _id: string;
    userId: string;
    brand: string;
    model: string;
    nickname?: string;
    totalDistance: number; // in meters (converted from backend)
    isDefault: boolean;
    isActive: boolean;
}

export interface Run {
    _id: string;
    userId: string;
    stravaId?: string;
    assignmentId?: string; // Linked workout
    shoeId?: string;      // Linked gear
    name: string;
    date: string;         // ISO Date string
    distance: number;     // in meters
    duration: number;     // in seconds
    avgPace: number;
}

export interface Assignment {
    _id: string;
    athleteId: string;
    coachId: string;
    workoutId: string; // The Template
    date: string;
    status: 'Pending' | 'Completed' | 'Missed';
    notes?: string;
}