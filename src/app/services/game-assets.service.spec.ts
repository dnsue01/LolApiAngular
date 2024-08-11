import { TestBed } from '@angular/core/testing';

import { GameAssetsService } from './game-assets.service';

describe('GameAssetsService', () => {
  let service: GameAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
