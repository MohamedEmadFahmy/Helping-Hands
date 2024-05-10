import TeachingVol from './TeachingVol';

const TeachingVolParent = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
      <TeachingVol name="John" description="Math Tutor" location="New York" />
      <TeachingVol
        name="Sarah"
        description="English Teacher"
        location="London"
      />
      <TeachingVol
        name="Michael"
        description="Science Instructor"
        location="San Francisco"
      />
    </div>
  );
};

export default TeachingVolParent;
