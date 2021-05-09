import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
import {Task} from '../../Task'
import {TASKS} from '../../mock-task'

@Component({
  selector: 'app-tasks',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService 
  ) { }

  ngOnInit(): void {
     this.taskService.getTasks()
          .subscribe((tasks)=> this.tasks =tasks)
  }

}
