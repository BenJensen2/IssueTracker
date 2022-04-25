from django.db import models

# Single issue
class Issue(models.Model):
    # Identifying Information
    title = models.CharField(max_length=255)
    description = models.TextField()

    # Projections
    projected_start = models.DateTimeField()
    projected_end = models.DateTimeField()
    
    # Actuals
    actual_start = models.DateTimeField()
    actual_end = models.DateTimeField()

    # Relational Information
    sprint = models.ForeignKey('Sprint', on_delete=models.CASCADE)

    # Creation & Update
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

class Sprint(models.Model):
  # Identifying Information
    title = models.CharField(max_length=255)
    description = models.TextField()

    # Projections
    projected_start = models.DateTimeField()
    projected_end = models.DateTimeField()
    
    # Actuals
    actual_start = models.DateTimeField()
    actual_end = models.DateTimeField()

    # Relational Information
    project = models.ForeignKey('Project', on_delete=models.CASCADE)
    # Issues

    # Creation & Update
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

class Project(models.Model):
    # Identifying Information
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, default='')

    # Projections
    projected_start = models.DateTimeField(null=True)
    projected_end = models.DateTimeField(null=True)
    
    # Actuals
    actual_start = models.DateTimeField(null=True)
    actual_end = models.DateTimeField(null=True)

    # Relational Information
    # Sprints

    # Creation & Update
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)