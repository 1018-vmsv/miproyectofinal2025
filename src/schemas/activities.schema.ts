import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class activitie {
    @Prop({
        unique: true,
        required: true,
        trim: true      // trim Retira los espacios del inicio y el
    })                  // final de una cadena
    prenda: string;
    
    @Prop({
        required: true,  
    })
    idcategoria:number;

    @Prop({
        trim: true,
        required: true
    })
    description: string;
    

    @Prop({ default: false})
    stock: number;
}
export const activitieSchema = SchemaFactory.createForClass(activitie)
