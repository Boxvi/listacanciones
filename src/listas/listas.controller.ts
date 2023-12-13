import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ListasService } from "./listas.service";
import { CreateListaDto } from "./dto/create-lista.dto";
import { UpdateListaDto } from "./dto/update-lista.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("listas")
@ApiTags("listas")
export class ListasController {
  constructor(private readonly listasService: ListasService) {
  }

  @Post()
  create(@Body() createListaDto: CreateListaDto) {
    return this.listasService.create(createListaDto);
  }

  @Get()
  findAll() {
    return this.listasService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.listasService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateListaDto: UpdateListaDto) {
    return this.listasService.update(+id, updateListaDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.listasService.remove(+id);
  }
}
