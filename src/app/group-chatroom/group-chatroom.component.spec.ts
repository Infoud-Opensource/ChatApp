import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupChatroomComponent } from './group-chatroom.component';

describe('GroupChatroomComponent', () => {
  let component: GroupChatroomComponent;
  let fixture: ComponentFixture<GroupChatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupChatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupChatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
