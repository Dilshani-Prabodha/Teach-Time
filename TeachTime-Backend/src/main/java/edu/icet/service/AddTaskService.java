package edu.icet.service;

import edu.icet.dto.AddTask;

import java.util.List;

public interface AddTaskService {
    void addTask(AddTask taskDTO);
    void updateTask(AddTask taskDTO);
    void deleteTask(Long taskId);
    List<AddTask> getAllTasksByTeacherId(Integer teacherId);
}