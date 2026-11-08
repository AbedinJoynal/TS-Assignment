const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier === undefined) {
        return value * 2;
    } else {
        return value * multiplier;
    }
};

const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === 'string') {
        return value.toLowerCase().trim();
    } else if (typeof value === 'number') {
        return value * 10;
    } else {
        return value === true ? 'Active' : 'Inactive';
    }
};

const formatCoordinate = ([latitude, longitude, locationName]: readonly [
    number,
    number,
    string,
]): string => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
};

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (course: Course[], minStudents: number): Course[] => {
    return course.filter(
        (item) => item.isPublished && item.students >= minStudents,
    );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((item) => item[key]);
};

class Employee {
    constructor(
        protected name: string,
        private baseSalary: number,
    ) {}
    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string,
    ) {
        super(name, baseSalary);
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error('Access Denied: Must be 18 or older'));
        } else {
            setTimeout(() => {
                resolve('Access Granted');
            }, 1000);
        }
    });
};
