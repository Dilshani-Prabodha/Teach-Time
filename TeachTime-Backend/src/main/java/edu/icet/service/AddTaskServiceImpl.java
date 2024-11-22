package edu.icet.service;

import edu.icet.dto.AddTask;
import edu.icet.entity.AddTaskEntity;
import edu.icet.entity.TeacherEntity;
import edu.icet.repository.AddTaskRepository;
import edu.icet.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AddTaskServiceImpl implements AddTaskService {

    @Autowired
    private final AddTaskRepository addTaskRepository;
    private final AddTaskRepository taskRepository;
    private final TeacherRepository teacherRepository;
    private final ModelMapper modelMapper;

    @Override
    public void addTask(AddTask taskDTO) {
        TeacherEntity teacher = teacherRepository.findById(taskDTO.getTeacherId())
                .orElseThrow(() -> new IllegalArgumentException("Teacher not found"));
        AddTaskEntity task = modelMapper.map(taskDTO, AddTaskEntity.class);
        task.setTeacher(teacher);
        taskRepository.save(task);
    }

    @Override
    public void updateTask(AddTask taskDTO) {
        AddTaskEntity task = taskRepository.findById(taskDTO.getTaskId())
                .orElseThrow(() -> new IllegalArgumentException("Task not found"));
        modelMapper.map(taskDTO, task);
        taskRepository.save(task);
    }

    @Override
    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }

    @Override
    public List<AddTask> getAllTasksByTeacherId(Integer teacherId) {
        List<AddTaskEntity> tasks = taskRepository.findAll()
                .stream()
                .filter(task -> task.getTeacher().getTeacherId().equals(teacherId))
                .collect(Collectors.toList());
        return tasks.stream()
                .map(task -> modelMapper.map(task, AddTask.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<AddTask> getAllTasks() {
        return taskRepository.findAll()
                .stream()
                .map(task -> modelMapper.map(task, AddTask.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<AddTask> filterTasks(Integer teacherId, String date, Integer period, String grade) {
        List<AddTaskEntity> filteredTasks = taskRepository.findAll()
                .stream()
                .filter(task ->
                        task.getTeacher().getTeacherId().equals(teacherId) &&
                                task.getDate().equals(date) &&
                                task.getPeriod().equals(period) &&
                                task.getGrade().equalsIgnoreCase(grade))
                .collect(Collectors.toList());
        return filteredTasks.stream()
                .map(task -> modelMapper.map(task, AddTask.class))
                .collect(Collectors.toList());
    }

    public List<AddTaskEntity> getTasks(Integer teacherId, String date, Integer period, String grade) {
        return addTaskRepository.findByTeacher_TeacherIdAndDateAndPeriodAndGrade(teacherId, date, period, grade);
    }

}