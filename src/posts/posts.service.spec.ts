import { Test, TestingModule } from '@nestjs/testing';
import { postsService } from './posts.service';

describe('PostsService', () => {
  let service: postsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [postsService],
    }).compile();

    service = module.get<postsService>(postsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
