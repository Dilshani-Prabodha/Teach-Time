package edu.icet.controller;

import edu.icet.dto.CompletedTask;
import edu.icet.service.CompletedTaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/completed-task")
@RequiredArgsConstructor
@CrossOrigin
public class CompletedTaskController {

    @Autowired
    final CompletedTaskService completedTaskService;

    @PostMapping("/add-task")
    @ResponseStatus(HttpStatus.CREATED)
    public void addTask(@RequestBody CompletedTask completedTask) {
        completedTaskService.addTask(completedTask);
    }

    @GetMapping("/search-task/{taskId}")
    public CompletedTask searchTask(@PathVariable Integer taskId) {
        return completedTaskService.searchTaskById(taskId);
    }

    @GetMapping("/get-all-tasks")
    public List<CompletedTask> getAllTasks() {
        return completedTaskService.getAllTasks();
    }

    @GetMapping("/tasks-by-teacher/{teacherId}")
    public List<CompletedTask> getTasksByTeacher(@PathVariable Integer teacherId) {
        return completedTaskService.getTasksByTeacherId(teacherId);
    }
}
