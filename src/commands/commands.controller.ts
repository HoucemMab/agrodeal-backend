import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommandsService } from './commands.service';
import { Command } from './entities/command.entity';

@Controller('commands')
export class CommandsController {
  constructor(private readonly commandsService: CommandsService) {}

  @Post()
  create(@Body() createCommandDto: Command) {
    return this.commandsService.create(createCommandDto);
  }

  @Get()
  findAll() {
    return this.commandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commandsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commandsService.remove(id);
  }
}
