import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RolesGuard } from '../auth/roles.guard';
import { LoggerInterceptor } from '../common/logger/logger.interceptor';
import { Course } from '../database/entities/course.entity';
import { CoursesService } from './courses.service';

@UseGuards(RolesGuard)
@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  all(): Course[] {
    return this.coursesService.all();
  }

  @Get(':id')
  find(@Param() id: string): Course {
    return this.coursesService.find(id);
  }

  @Post()
  create(@Body() course: Course): Course {
    return this.coursesService.create(course);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() course: Course): Course {
    return this.coursesService.update(course);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coursesService.delete(id);
  }
}
