package edu.icet.service;

import edu.icet.dto.Teacher;
import edu.icet.dto.TimeTable;
import edu.icet.entity.TeacherEntity;
import edu.icet.entity.TimeTableCompositePkEntity;
import edu.icet.entity.TimeTableEntity;
import edu.icet.repository.TeacherRepository;
import edu.icet.repository.TimeTableRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
@RequiredArgsConstructor
public class TimeTableServiceImpl implements TimeTableService{
    private final TimeTableRepository timeTableRepository;
    private final TeacherRepository teacherRepository;
    private final ModelMapper modelMapper;
    @Override
    public List<TimeTable> getAll() {
        List<TimeTable> timeTableArrayList = new ArrayList<>();
        timeTableRepository.findAll().forEach(entity -> {
            TimeTable timeTable = new TimeTable();
            timeTable.setTeacherId(entity.getTimeTblId().getTeacherId());
            timeTable.setDay(entity.getTimeTblId().getDay());
            timeTable.setPeriod(entity.getTimeTblId().getPeriod());
            timeTable.setGrade(entity.getGrade());
            timeTableArrayList.add(timeTable);
        });
        return timeTableArrayList;
    }

    @Override
    public void addGradesToTimeTbl(TimeTable timeTable) {
        timeTableRepository.save(timetableTotimetableEntity(timeTable));
    }

    private TimeTableEntity timetableTotimetableEntity(TimeTable timeTable) {
        TimeTableCompositePkEntity compositeKey = new TimeTableCompositePkEntity();
        compositeKey.setTeacherId(timeTable.getTeacherId());
        compositeKey.setDay(timeTable.getDay());
        compositeKey.setPeriod(timeTable.getPeriod());

        TeacherEntity teacherEntity = teacherRepository.findById(timeTable.getTeacherId()).orElseThrow();
        TimeTableEntity timeTableEntity = new TimeTableEntity();
        timeTableEntity.setTimeTblId(compositeKey);
        timeTableEntity.setGrade(timeTable.getGrade());
        timeTableEntity.setTeacherEntity(teacherEntity);
        return timeTableEntity;
    }

    @Override
    public TimeTable searchGradeById(TimeTableCompositePkEntity timeTblId) {
        return modelMapper.map(timeTableRepository.findById(timeTblId), TimeTable.class);
    }

    @Override
    public void deleteGradeById(TimeTableCompositePkEntity timeTblId) {
        timeTableRepository.deleteById(timeTblId);
    }

    @Override
    public void UpdateGradeById(TimeTable timeTable) {
        timeTableRepository.save(timetableTotimetableEntity(timeTable));
    }
}
