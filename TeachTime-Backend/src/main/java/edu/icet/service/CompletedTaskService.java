package edu.icet.service;

import edu.icet.dto.CompletedTask;

import java.util.List;

public interface CompletedTaskService {
    void addTask(CompletedTask completedTask);
    CompletedTask searchTaskById(Integer comTaskId);
    List<CompletedTask> getAllTasks();
    List<CompletedTask> getTasksByTeacherId(Integer teacherId);
}
