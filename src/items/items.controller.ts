import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get all the items';
    }
    @Get(':id')
    findOne(@Param('id') id): string {
        return `Item id: ${id}`;
    }

    @Post()
    create(@Body() createItemDto:CreateItemDto): string{
        return `Name: ${createItemDto.name} Desc: ${createItemDto.desc} Qty: ${createItemDto.qty}`
    }  

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete item id: ${id}`;
    }
}
