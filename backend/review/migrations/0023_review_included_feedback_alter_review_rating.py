# Generated by Django 5.1.1 on 2024-10-23 22:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0022_alter_review_rating'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='included_feedback',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='review',
            name='rating',
            field=models.CharField(choices=[('5', '⭐⭐⭐⭐⭐'), ('1', '⭐'), ('2', '⭐⭐'), ('4', '⭐⭐⭐⭐'), ('3', '⭐⭐⭐')], max_length=20),
        ),
    ]