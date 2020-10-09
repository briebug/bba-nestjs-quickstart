import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Course } from '../database/entities/course.entity';


let courses: Course[] = [
  {
    id: '6f311656-f8d6-407f-94c6-2bea0c4e5399',
    title: 'Mock! Angular Fundamentals',
    description: 'Pending',
    thumbnail: '/assets/images/course-card-default.png',
    lessons: [],
  },
  {
    id: 'e358e4b1-7012-4353-9cf9-634e47ea787e',
    title: 'Mock! RxJS Quickstart',
    description: 'Pending.',
    thumbnail: '/assets/images/course-card-default.png',
    lessons: [],
  },
  {
    id: '3dca6bc9-397f-4062-ae8d-319d36144b82',
    title: 'Mock! Ionic Quickstart',
    description: 'Pending.',
    thumbnail: '/assets/images/course-card-default.png',
    lessons: [],
  },
];

const find = (id, collection) => collection.find((item) => item.id === id);

const add = (entity, collection) => [...collection, entity];

const update = (entity, collection) =>
  collection.map((item) => (item.id === entity.id ? { ...entity } : item));

const remove = (id, collection) => collection.filter((item) => item.id !== id);


@Injectable()
export class CoursesService {
  all(): Course[] {
    return courses;
  }

  find(id: string): Course {
    return find(id, courses);
  }

  create(course: Course): Course {
    courses = add(course, courses);
    return course;
  }

  update(course: Course): Course {
    courses = update(course, courses);
    return course;
  }

  delete(id: string) {
    courses = remove(id, courses);
    return {};
  }
}
