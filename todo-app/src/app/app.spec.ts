import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should add, complete, and delete a todo', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    const input = compiled.querySelector('input[name="todoTitle"]') as HTMLInputElement;
    input.value = 'Write tests';
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    compiled.querySelector('form')?.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Write tests');

    const checkbox = compiled.querySelector('input[type="checkbox"]') as HTMLInputElement;
    checkbox.click();
    fixture.detectChanges();
    expect(compiled.querySelector('label[for="todo-1"]')?.classList).toContain('line-through');

    compiled.querySelector('button[aria-label="Delete Write tests"]')?.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(compiled.textContent).toContain('Nothing on the list yet.');
  });
});
