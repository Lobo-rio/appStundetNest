import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(
    private readonly service: TeachersService,
  ){}

  @Get()
  findAll(){
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto){
    return this.service.create(createTeacherDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto){
    return this.service.update(id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    return this.service.remove(id);
  }
}
