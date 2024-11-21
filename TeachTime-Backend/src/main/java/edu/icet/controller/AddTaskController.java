package edu.icet.controller;

import edu.icet.dto.AddTask;
import edu.icet.service.AddTaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/add-tasks")
@RequiredArgsConstructor
@CrossOrigin
public class AddTaskController {

    private final AddTaskService taskService;

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public void addTask(@RequestBody AddTask taskDTO) {
        taskService.addTask(taskDTO);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.OK)
    public void updateTask(@RequestBody AddTask taskDTO) {
        taskService.updateTask(taskDTO);
    }

    @DeleteMapping("/delete/{taskId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTask(@PathVariable Long taskId) {
        taskService.deleteTask(taskId);
    }

    @GetMapping("/get-teacher-task/{teacherId}")
    public List<AddTask> getTasksByTeacherId(@PathVariable Integer teacherId) {
        return taskService.getAllTasksByTeacherId(teacherId);
    }
}
