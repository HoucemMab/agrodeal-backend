import { Injectable } from '@nestjs/common';
import { Command } from './entities/command.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommandsService {
  constructor(
    @InjectRepository(Command)
    private readonly commandRepository: Repository<Command>,
  ) {}
  create(createCommandDto: Command) {
    return this.commandRepository.save(createCommandDto);
  }

  findAll() {
    return this.commandRepository.find();
  }

  findOne(id: string) {
    return this.commandRepository.findOneBy({ id: id });
  }

  remove(id: string) {
    return this.commandRepository.delete({ id: id });
  }
}
