import { IsNotEmpty } from 'class-validator';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import Category from './Category';
import User from './User';
import Comment from './Comment';
import Tag from './Tag';
@Entity()
class Post {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    @IsNotEmpty()
    public title: string;

    @ManyToOne(() => User, user => user.posts, { eager: true, onDelete: 'CASCADE' })
    public user: User;

    @OneToMany(() => Comment, comment => comment.post)
    public comments: Comment[];

    @OneToMany(() => Tag, tag => tag.post)
    public tags: Tag[];

    @OneToOne(() => Category, category => category.post)
    public category: Category;

    @Column({ default: "" })
    public url: string = "";

    @Column({ default: "" })
    public text: string = "";

    @Column({ default: new Date })
    @CreateDateColumn()
    public createdAt: Date = new Date;

    @Column({ default: new Date })
    @UpdateDateColumn()
    public updatedAt: Date;
}

export default Post;