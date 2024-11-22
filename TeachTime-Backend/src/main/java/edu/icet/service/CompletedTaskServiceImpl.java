package edu.icet.service;

import edu.icet.dto.CompletedTask;
import edu.icet.entity.CompletedTaskEntity;
import edu.icet.repository.CompletedTaskRepository;
import edu.icet.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CompletedTaskServiceImpl implements CompletedTaskService {

    private final CompletedTaskRepository completedTaskRepository;
    private final TeacherRepository teacherRepository;
    private final ModelMapper modelMapper;

    @Override
    public void addTask(CompletedTask completedTask) {
        CompletedTaskEntity taskEntity = modelMapper.map(completedTask, CompletedTaskEntity.class);
        // Setting the teacher association
        taskEntity.setTeacher(teacherRepository.findById(completedTask.getTeacherId())
                .orElseThrow(() -> new RuntimeException("Teacher not found")));
        completedTaskRepository.save(taskEntity);
    }

    @Override
    public CompletedTask searchTaskById(Integer comTaskId) {
        return modelMapper.map(
                completedTaskRepository.findById(comTaskId)
                        .orElseThrow(() -> new RuntimeException("Task not found")),
                CompletedTask.class);
    }

    @Override
    public List<CompletedTask> getAllTasks() {
        List<CompletedTask> tasks = new ArrayList<>();
        completedTaskRepository.findAll().forEach(taskEntity ->
                tasks.add(modelMapper.map(taskEntity, CompletedTask.class))
        );
        return tasks;
    }

    @Override
    public List<CompletedTask> getTasksByTeacherId(Integer teacherId) {
        List<CompletedTask> tasks = new ArrayList<>();
        completedTaskRepository.findByTeacher_TeacherId(teacherId).forEach(taskEntity ->
                tasks.add(modelMapper.map(taskEntity, CompletedTask.class))
        );
        return tasks;
    }
}
